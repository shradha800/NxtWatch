import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../Context/ThemeContext'
import TrendingCard from '../TrendingCard'

import {
  TrendingMainContainer,
  TrendingContent,
  TrendingContainer,
  TrendingBanner,
  TrendingLogoContainer,
  TrendingTitle,
  SidebarContainer,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDescription,
  RetryBtn,
  LoaderContainer,
  VideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingList: []}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingList} = this.state

    return (
      <VideosList>
        {trendingList.map(each => (
          <TrendingCard key={each.id} trendingVideosDetails={each} />
        ))}
      </VideosList>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const color = isDarkTheme ? 'white' : 'black'

        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={imgUrl} alt="failure view" />
            <FailureTitle color={color}>
              Oops! Something Went Wrong
            </FailureTitle>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryBtn type="button" onClick={this.getTrendingList}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoaderView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <TrendingMainContainer data-testid="trending" theme={theme}>
              <Header />
              <TrendingContent>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <TrendingContainer>
                  <TrendingBanner theme={theme}>
                    <TrendingLogoContainer theme={theme}>
                      <HiFire size={40} color="#ff0b37" />
                    </TrendingLogoContainer>
                    <TrendingTitle theme={theme}> Trending </TrendingTitle>
                  </TrendingBanner>
                  {this.renderTrendingVideos()}
                </TrendingContainer>
              </TrendingContent>
            </TrendingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending

import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import GamingCard from '../GamingCard'

import {
  GamingMainContainer,
  GamingContent,
  GamingContainer,
  SidebarContainer,
  TrendingBanner,
  TrendingLogoContainer,
  TrendingTitle,
  VideosList,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDescription,
  RetryBtn,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingList: []}

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

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
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {gamingList} = this.state

    return (
      <VideosList>
        {gamingList.map(each => (
          <GamingCard key={each.id} gamingVideosDetails={each} />
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
            <RetryBtn type="button" onClick={this.getGamingList}>
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

  renderGamingList = () => {
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
            <GamingMainContainer data-testid="gaming" theme={theme}>
              <Header />
              <GamingContent>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <GamingContainer theme={theme}>
                  <TrendingBanner theme={theme}>
                    <TrendingLogoContainer theme={theme}>
                      <SiYoutubegaming size={40} color="#ff0b37" />
                    </TrendingLogoContainer>
                    <TrendingTitle theme={theme}> Gaming </TrendingTitle>
                  </TrendingBanner>
                  {this.renderGamingList()}
                </GamingContainer>
              </GamingContent>
            </GamingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming

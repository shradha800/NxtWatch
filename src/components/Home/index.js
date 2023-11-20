import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../Context/ThemeContext'

import Sidebar from '../Sidebar'

import {
  HomeMainContainer,
  MainBody,
  SidebarContainer,
  HomeContainer,
  BannerSection,
  BannerContent,
  BannerLogo,
  BannerDescription,
  BannerBtn,
  CloseBtn,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideosList,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDescription,
  RetryBtn,
  LoaderContainer,
} from './styledComponents'

import Header from '../Header'

import VideosItems from '../VideosItems'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isBannerActive: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickCloseBanner = () => {
    this.setState({isBannerActive: false})
  }

  renderBannerSection = () => (
    <BannerSection data-testid="banner">
      <BannerContent>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
          data-testid="banner"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <BannerBtn type="button">GET IT NOW</BannerBtn>
      </BannerContent>
      <CloseBtn
        type="button"
        onClick={this.onClickCloseBanner}
        data-testid="close"
      >
        <GrFormClose size={25} />
      </CloseBtn>
    </BannerSection>
  )

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const color = isDarkTheme ? 'white' : 'black'

        return (
          <FailureContainer>
            <FailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureTitle color={color}>No Search result found</FailureTitle>
            <FailureDescription>
              Try different key words or remove search filter.
            </FailureDescription>
            <RetryBtn type="button" onClick={this.getAllVideos}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.noView()
    }

    return (
      <VideosList>
        {videosList.map(eachVideos => (
          <VideosItems key={eachVideos.id} videosDetails={eachVideos} />
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
            <RetryBtn type="button" onClick={this.getAllVideos}>
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

  renderMainBody = () => {
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
    const {isBannerActive, searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <HomeMainContainer theme={theme} data-testid="home">
              <Header />
              <MainBody theme={theme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <HomeContainer>
                  {isBannerActive && this.renderBannerSection()}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      theme={theme}
                      placeholder="Search"
                      onChange={this.updateSearchInput}
                      value={searchInput}
                    />
                    <SearchBtn
                      type="button"
                      onClick={this.getAllVideos}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={20} />
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderMainBody()}
                </HomeContainer>
              </MainBody>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

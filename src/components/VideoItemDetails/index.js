import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  VideosDetailsMainContainer,
  MainBody,
  SidebarContainer,
  FailureContainer,
  FailureImg,
  FailureTitle,
  FailureDescription,
  RetryBtn,
  LoaderContainer,
  VideoItemDetailsContainer,
  VideosDetailsContainer,
  PlayerContainer,
  VideoTextContainer,
  VideoTitle,
  LikeAndViewContainer,
  ViewAndPostContainer,
  ViewsTxt,
  LikeDislikeContainer,
  LikeDislikeBtn,
  LikeDislikeTxt,
  HrLine,
  VideoDetails,
  LogoSubscriberContainer,
  ThumbnailImg,
  VideoName,
  Subscriber,
  Description,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideosContext from '../../Context/SavedVideosContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideosDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsList: {},
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getVideosDetailsList()
  }

  getVideosDetailsList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        videoDetails: data.video_details,
      }

      const {videoDetails} = updatedData

      const updated = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }

      console.log(updated)

      this.setState({
        videoDetailsList: updated,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onLike = () => {
    this.setState(prevState => ({isLike: !prevState.isLike, isDislike: false}))
  }

  onDislike = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLike: false,
    }))
  }

  renderSuccessView = () => {
    const {videoDetailsList, isLike, isDislike} = this.state

    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsList

    const {id, name, profileImageUrl, subscriberCount} = channel

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }

    const likeActive = isLike ? 'active' : 'inactive'
    const disLikeActive = isDislike ? 'active' : 'inactive'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <VideosDetailsContainer theme={theme}>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </PlayerContainer>
              <VideoTextContainer>
                <VideoTitle theme={theme}> {title} </VideoTitle>
                <LikeAndViewContainer>
                  <ViewAndPostContainer>
                    <ViewsTxt> {viewCount} views </ViewsTxt>
                    <ViewsTxt> | </ViewsTxt>
                    <ViewsTxt> {postedAt} ago </ViewsTxt>
                  </ViewAndPostContainer>
                  <LikeDislikeContainer>
                    <LikeDislikeBtn
                      type="button"
                      onClick={this.onLike}
                      theme={likeActive}
                    >
                      <BiLike size={24} />
                      <LikeDislikeTxt> Like </LikeDislikeTxt>
                    </LikeDislikeBtn>
                    <LikeDislikeBtn
                      type="button"
                      onClick={this.onDislike}
                      theme={disLikeActive}
                    >
                      <BiDislike size={24} />
                      <LikeDislikeTxt> Dislike </LikeDislikeTxt>
                    </LikeDislikeBtn>
                    <SavedVideosContext.Consumer>
                      {val => {
                        const {updateSave, savedVideosList} = val

                        const present = savedVideosList.find(
                          eachItem => eachItem.id === id,
                        )

                        const saveIsActive =
                          present !== undefined ? 'active' : 'inactive'
                        const savedText =
                          present !== undefined ? 'Saved' : 'Save'

                        return (
                          <LikeDislikeBtn type="button">
                            <MdPlaylistAdd
                              size={24}
                              theme={saveIsActive}
                              onClick={() => updateSave(videoDetailsList)}
                            />
                            <LikeDislikeTxt> {savedText} </LikeDislikeTxt>
                          </LikeDislikeBtn>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </LikeDislikeContainer>
                </LikeAndViewContainer>
                <HrLine />
                <VideoDetails>
                  <LogoSubscriberContainer>
                    <div>
                      <ThumbnailImg src={profileImageUrl} alt="channel logo" />
                    </div>
                    <div>
                      <VideoName theme={theme}> {name} </VideoName>
                      <Subscriber> {subscriberCount} subscriber </Subscriber>
                    </div>
                  </LogoSubscriberContainer>
                  <Description> {description} </Description>
                </VideoDetails>
              </VideoTextContainer>
            </VideosDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
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
            <RetryBtn type="button" onClick={this.getVideosDetailsList}>
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
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <VideosDetailsMainContainer theme={theme}>
              <Header />
              <MainBody theme={theme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <VideoItemDetailsContainer theme={theme}>
                  {this.renderMainBody()}
                </VideoItemDetailsContainer>
              </MainBody>
            </VideosDetailsMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideosDetails

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  VideosItem,
  Thumbnail,
  VideoContentContainer,
  ProfileImg,
  VideoTxtContainer,
  Title,
  VideoDetailsTxt,
  VideoViewYearContainer,
} from './styledComponents'

const VideosItems = props => {
  const {videosDetails} = props

  const {
    id,
    thumbnailUrl,
    channel,
    publishedAt,
    title,
    viewCount,
  } = videosDetails

  const {name, profileImageUrl} = channel

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <VideosItem>
      <Link to={`/videos/${id}`} className="link">
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoContentContainer>
          <div>
            <ProfileImg src={profileImageUrl} alt="channel logo" />
          </div>
          <VideoTxtContainer>
            <Title> {title} </Title>
            <VideoDetailsTxt> {name} </VideoDetailsTxt>
            <VideoViewYearContainer>
              <VideoDetailsTxt> {viewCount} views </VideoDetailsTxt>
              <VideoDetailsTxt> | </VideoDetailsTxt>
              <VideoDetailsTxt> {postedAt} ago </VideoDetailsTxt>
            </VideoViewYearContainer>
          </VideoTxtContainer>
        </VideoContentContainer>
      </Link>
    </VideosItem>
  )
}

export default VideosItems

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  TrendingCardContainer,
  TrendingImg,
  TrendingCardContent,
  TrendingProfileImg,
  TrendingContent,
  TrendingTitle,
  TrendingDetails,
  TrendingDetail,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

const TrendingCard = props => {
  const {trendingVideosDetails} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingVideosDetails

  const {name, profileImageUrl} = channel

  let postedAt = formatDistanceToNow(new Date(publishedAt))
  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <Link to={`/videos/${id}`} className="link">
            <TrendingCardContainer theme={theme}>
              <div>
                <TrendingImg src={thumbnailUrl} alt="video thumbnail" />
              </div>
              <TrendingCardContent>
                <div>
                  <TrendingProfileImg
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                </div>
                <TrendingContent>
                  <TrendingTitle theme={theme}> {title} </TrendingTitle>
                  <TrendingDetail theme={theme}> {name} </TrendingDetail>
                  <TrendingDetails>
                    <TrendingDetail theme={theme}>
                      {viewCount} views
                    </TrendingDetail>
                    <TrendingDetail> | </TrendingDetail>
                    <TrendingDetail> {postedAt} </TrendingDetail>
                  </TrendingDetails>
                </TrendingContent>
              </TrendingCardContent>
            </TrendingCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingCard

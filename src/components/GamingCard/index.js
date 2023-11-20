import {Link} from 'react-router-dom'

import {
  GamingCardContainer,
  GamingImg,
  GamingTitle,
  GamingViews,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

const GamingCard = props => {
  const {gamingVideosDetails} = props

  const {id, thumbnailUrl, title, viewCount} = gamingVideosDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <Link to={`/videos/${id}`} className="link">
            <GamingCardContainer>
              <GamingImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingTitle theme={theme}> {title} </GamingTitle>
              <GamingViews theme={theme}>
                {viewCount} Watching Worldwide
              </GamingViews>
            </GamingCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingCard

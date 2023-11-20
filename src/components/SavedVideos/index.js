import {RiMenuAddLine} from 'react-icons/ri'

import {
  SavedVideosMainContainer,
  MainBody,
  SidebarContainer,
  SavedVideosContainer,
  TrendingBanner,
  TrendingLogoContainer,
  TrendingTitle,
  NoVideosContainer,
  NoVideosImg,
  FailureTxt,
  FailureDescription,
  VideosList,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingCard from '../TrendingCard'

import ThemeContext from '../../Context/ThemeContext'
import SavedVideosContext from '../../Context/SavedVideosContext'

const SavedVideos = () => {
  const savedList = themeValue => {
    const {isDarkTheme} = themeValue
    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value

          if (savedVideosList.length === 0) {
            return (
              <NoVideosContainer>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <FailureTxt theme={theme}> No saved videos found </FailureTxt>
                <FailureDescription theme={theme}>
                  You can save your videos while watching them
                </FailureDescription>
              </NoVideosContainer>
            )
          }
          return (
            <VideosList>
              {savedVideosList.map(each => (
                <TrendingCard key={each.id} trendingVideosDetails={each} />
              ))}
            </VideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }

  return (
    <ThemeContext.Consumer>
      {themeValue => {
        const {isDarkTheme} = themeValue

        const theme = isDarkTheme ? 'dark' : 'light'

        return (
          <SavedVideosMainContainer data-testid="savedVideos" theme={theme}>
            <Header />
            <MainBody>
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
              <SavedVideosContainer>
                <TrendingBanner theme={theme}>
                  <TrendingLogoContainer theme={theme}>
                    <RiMenuAddLine size={40} color="#ff0b37" />
                  </TrendingLogoContainer>
                  <TrendingTitle theme={theme}> Saved Videos </TrendingTitle>
                </TrendingBanner>
                {savedList(themeValue)}
              </SavedVideosContainer>
            </MainBody>
          </SavedVideosMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos

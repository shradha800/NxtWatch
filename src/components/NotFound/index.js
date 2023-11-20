import Header from '../Header'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'
      const color = isDarkTheme ? 'white' : 'black'

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer theme={theme}>
            <NotFoundImg src={notFoundImg} alt="not found" />
            <NotFoundTitle color={color}> Page Not Found </NotFoundTitle>
            <NotFoundDescription>
              We are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

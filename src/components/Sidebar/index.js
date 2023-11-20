import {Component} from 'react'

import {
  SiderbarContainer,
  ContactusContainer,
  ContactusTxt,
  LogoIcon,
} from './styledComponents'

import MenuItemsList from '../MenuItemsList'

import ThemeContext from '../../Context/ThemeContext'

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <SiderbarContainer theme={theme}>
              <MenuItemsList />
              <ContactusContainer>
                <ContactusTxt theme={theme}> CONTACT US </ContactusTxt>
                <div>
                  <LogoIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <ContactusTxt theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactusTxt>
              </ContactusContainer>
            </SiderbarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Sidebar

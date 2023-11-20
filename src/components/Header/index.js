import {Component} from 'react'

import {Redirect, withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveMenuContext'
import MenuItemsList from '../MenuItemsList'

import {
  HeaderContainer,
  HeaderLogo,
  SmallIconContainer,
  PopupContainerSmall,
  CloseButton,
  Icons,
  MediumIconContainer,
  ProfileIcon,
  LogoutBtn,
  PopupContainer,
  PopupTxt,
} from './styledComponents'

import './index.css'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value

          const onLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const jwtToken = Cookies.get('jwt_token')

          if (jwtToken === undefined) {
            return <Redirect to="/login" />
          }

          const headerLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const color = isDarkTheme ? 'white' : 'black'
          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <HeaderContainer theme={theme}>
              <ActiveMenuContext.Consumer>
                {activeValue => {
                  const {changeActiveMenu} = activeValue

                  return (
                    <Link to="/">
                      <HeaderLogo
                        src={headerLogo}
                        alt="website logo"
                        onClick={() => changeActiveMenu('HOME')}
                      />
                    </Link>
                  )
                }}
              </ActiveMenuContext.Consumer>
              <SmallIconContainer>
                <Icons type="button" onClick={() => changeTheme()}>
                  {isDarkTheme ? (
                    <FiSun color="white" size={22} />
                  ) : (
                    <FaMoon size={22} />
                  )}
                </Icons>
                <Popup
                  modal
                  trigger={
                    <Icons color={color} type="button">
                      <GiHamburgerMenu size={22} />
                    </Icons>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainerSmall theme={theme}>
                      <CloseButton theme={theme}>
                        <Icons
                          type="button"
                          color={color}
                          onClick={() => close()}
                        >
                          <IoMdClose size={15} />
                        </Icons>
                      </CloseButton>
                      <MenuItemsList />
                    </PopupContainerSmall>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <Icons color={color} type="button">
                      <FiLogOut size={22} />
                    </Icons>
                  }
                  className="popup-content"
                >
                  {close => (
                    <>
                      <PopupContainer theme={theme}>
                        <PopupTxt className="popup-txt" color={color}>
                          Are you sure, you want to logout?
                        </PopupTxt>
                        <div>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="cancel-btn"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={onLogout}
                            className="confirm-btn"
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </SmallIconContainer>
              <MediumIconContainer>
                <Icons
                  data-testid="theme"
                  type="button"
                  onClick={() => changeTheme()}
                >
                  {isDarkTheme ? (
                    <FiSun color="white" size={34} />
                  ) : (
                    <FaMoon size={34} />
                  )}
                </Icons>
                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <LogoutBtn type="button" color={color}>
                      Logout
                    </LogoutBtn>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer theme={theme}>
                      <PopupTxt className="popup-txt" color={color}>
                        Are you sure, you want to logout?
                      </PopupTxt>
                      <div>
                        <button
                          type="button"
                          onClick={() => close()}
                          className="cancel-btn"
                          color={color}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={onLogout}
                          className="confirm-btn"
                          color={color}
                        >
                          Confirm
                        </button>
                      </div>
                    </PopupContainer>
                  )}
                </Popup>
              </MediumIconContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)

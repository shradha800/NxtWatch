import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'

import {MenuList, MenuLink, MenuHeading} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'
import ActiveMenuContext from '../../Context/ActiveMenuContext'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItemsList = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <ActiveMenuContext.Consumer>
          {activeMenuValue => {
            const {activeMenu, changeActiveMenu} = activeMenuValue

            const iconColor = isDarkTheme ? '#424242' : '#7e858e'
            const iconActive = '#ff0b37'

            return (
              <MenuList>
                <Link to="/" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.home}
                    onClick={() => changeActiveMenu(activeMenuConstants.home)}
                    key="HOME"
                  >
                    <AiFillHome
                      size={24}
                      color={
                        activeMenu === activeMenuConstants.home
                          ? iconActive
                          : iconColor
                      }
                    />
                    <MenuHeading theme={theme}> Home </MenuHeading>
                  </MenuLink>
                </Link>

                <Link to="/trending" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.trending}
                    onClick={() =>
                      changeActiveMenu(activeMenuConstants.trending)
                    }
                    key="TRENDING"
                  >
                    <HiFire
                      size={24}
                      color={
                        activeMenu === activeMenuConstants.trending
                          ? iconActive
                          : iconColor
                      }
                    />
                    <MenuHeading theme={theme}> Trending </MenuHeading>
                  </MenuLink>
                </Link>

                <Link to="/gaming" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.gaming}
                    onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
                    key="GAMING"
                  >
                    <SiYoutubegaming
                      size={24}
                      color={
                        activeMenu === activeMenuConstants.gaming
                          ? iconActive
                          : iconColor
                      }
                    />
                    <MenuHeading theme={theme}> Gaming </MenuHeading>
                  </MenuLink>
                </Link>

                <Link to="/saved-videos" className="link">
                  <MenuLink
                    theme={theme}
                    isActive={activeMenu === activeMenuConstants.savedVideos}
                    onClick={() =>
                      changeActiveMenu(activeMenuConstants.savedVideos)
                    }
                    key="SAVEDVIDEOS"
                  >
                    <RiMenuAddLine
                      size={24}
                      color={
                        activeMenu === activeMenuConstants.savedVideos
                          ? iconActive
                          : iconColor
                      }
                    />
                    <MenuHeading theme={theme}> Saved videos </MenuHeading>
                  </MenuLink>
                </Link>
              </MenuList>
            )
          }}
        </ActiveMenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuItemsList

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './Context/ThemeContext'
import ActiveMenuContext from './Context/ActiveMenuContext'
import SavedVideosContext from './Context/SavedVideosContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here

class App extends Component {
  state = {
    isDarkTheme: false,
    activeMenu: activeMenuConstants.home,
    savedVideosList: [],
    save: false,
  }

  addVideosToSavedVideos = videosDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videosDetails],
    }))
  }

  deleteVideosFromSavedVideos = videosDetails => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      eachItem => eachItem.id !== videosDetails.id,
    )

    this.setState({savedVideosList: updatedList})
  }

  updateVideosList = videosDetails => {
    const {save} = this.state

    if (save) {
      this.deleteVideosFromSavedVideos(videosDetails)
    } else {
      this.addVideosToSavedVideos(videosDetails)
    }
  }

  updateSave = videosDetails => {
    this.setState(
      prevState => ({save: !prevState.save}),
      this.updateVideosList(videosDetails),
    )
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {isDarkTheme, activeMenu, save, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{isDarkTheme, changeTheme: this.changeTheme}}
      >
        <SavedVideosContext.Provider
          value={{
            save,
            savedVideosList,
            addVideosToSavedVideos: this.addVideosToSavedVideos,
            deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
            updateSave: this.updateSave,
          }}
        >
          <ActiveMenuContext.Provider
            value={{activeMenu, changeActiveMenu: this.changeActiveMenu}}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </ActiveMenuContext.Provider>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App

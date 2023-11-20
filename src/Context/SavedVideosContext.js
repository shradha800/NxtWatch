import React from 'react'

const SavedVideosContext = React.createContext({
  saved: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default SavedVideosContext

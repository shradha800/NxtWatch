import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;
  }
`

export const SavedVideosContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  flex-grow: 1;
`

export const TrendingBanner = styled.div`
  background-color: #ebebeb;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f1f1f1'};
`

export const TrendingLogoContainer = styled.div`
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  display: flex;
`
export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  padding-left: 10px;
`

export const NoVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosImg = styled.img`
  width: 200px;
`

export const FailureTxt = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 20px;
`

export const FailureDescription = styled.p`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
`

export const VideosList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`

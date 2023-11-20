import styled from 'styled-components'

export const VideosDetailsMainContainer = styled.div``

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;

    @media screen and (min-width: 768px) {
      background-color: ${props =>
        props.theme === 'dark' ? '#181818' : '#f9f9f9'};
    }
  }
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`

export const FailureImg = styled.img`
  width: 140px;
`

export const FailureTitle = styled.h1`
  color: ${props => (props.color === 'white' ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 20px;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  text-align: center;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 80px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 100vh;
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  padding: 10px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const VideosDetailsContainer = styled.div`
  height: 100%;
`

export const PlayerContainer = styled.div`
  height: 40%;

  @media screen and (min-width: 768px) {
    height: 70%;
    padding: 5px;
  }
`

export const VideoTextContainer = styled.div`
  padding: 10px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const LikeAndViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #475569;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`

export const ViewAndPostContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsTxt = styled.p`
  margin-right: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px;
`

export const LikeDislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const LikeDislikeTxt = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  padding-left: 5px;
`

export const HrLine = styled.hr`
  color: #475569;
  width: 100%;
`

export const VideoDetails = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`

export const LogoSubscriberContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
`

export const ThumbnailImg = styled.img`
  width: 65px;
`

export const VideoName = styled.p`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding-left: 10px;
  margin-top: 3px;
`

export const Subscriber = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
`

export const Description = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    padding-left: 70px;
  }
`

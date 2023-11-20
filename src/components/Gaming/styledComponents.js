import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const GamingContent = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const GamingContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  flex-grow: 1;
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;
  }
`
export const TrendingBanner = styled.div`
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
`

export const VideosList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

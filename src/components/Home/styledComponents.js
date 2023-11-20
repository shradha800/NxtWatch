import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90vh;

    @media screen and (min-width: 768px) {
      background-color: ${props =>
        props.theme === 'dark' ? '#181818' : '#f9f9f9'};
    }
  }
`

export const HomeMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HomeContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: block;
  }
`

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 20px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerLogo = styled.img`
  width: 100px;
`

export const BannerDescription = styled.p`
  width: 70%;
  color: #231f20;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`

export const BannerBtn = styled.button`
  background-color: transparent;
  color: #231f20;
  width: 100px;
  height: 34px;
  margin-top: 10px;
  border: 2px solid #231f20;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #616e7c;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  height: 30px;
  flex-grow: 1;
  color: #475569;
  padding-left: 10px;
  padding: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const SearchBtn = styled.button`
  background-color: #e2e8f0;
  color: #64748b;
  padding: 5px;
  border: none;
  height: 30px;
  width: 70px;
  border-left: 1px solid #616e7c;
`

export const VideosList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
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

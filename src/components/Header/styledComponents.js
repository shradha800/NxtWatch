import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const HeaderLogo = styled.img`
  width: 80px;

  @media screen and (min-width: 768px) {
    width: 200px;
    padding-left: 30px;
  }
`

export const SmallIconContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Icons = styled.button`
  background-color: transparent;
  padding: 0px;
  margin-left: 15px;
  border: none;
  color: ${props => (props.color === 'white' ? '#f9f9f9' : '#0f0f0f')};
`

export const MediumIconContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileIcon = styled.img`
  width: 43px;
  height: 43px;
  margin-left: 34px;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  border-radius: 5px;
  padding: 8px;
  margin-left: 34px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  width: 120px;
`

export const PopupContainer = styled.div`
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const PopupContainerSmall = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 100vh;
  width: 100vw;
`

export const CloseButton = styled.div`
  align-self: flex-end;
`

export const PopupTxt = styled.p`
  color: ${props => (props.color === 'white' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 10px;
`

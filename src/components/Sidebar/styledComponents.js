import styled from 'styled-components'

export const SiderbarContainer = styled.div`
  width: 250px;
  height: 90vh;
  margin-right: 0px;
  padding-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const ContactusContainer = styled.div`
  padding: 10px;
`

export const ContactusTxt = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : ' #212121')};
`

export const LogoIcon = styled.img`
  width: 30px;
  margin-right: 8px;
`

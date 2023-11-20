import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const NotFoundImg = styled.img`
  width: 260px;
`

export const NotFoundTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding-top: 20px;
  color: ${props => (props.color === 'white' ? '#ffffff' : '#000000')};
`

export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 80%;
  color: ${props => (props.color === 'white' ? '#1e293b' : '#475569')};
`

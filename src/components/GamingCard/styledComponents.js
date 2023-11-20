import styled from 'styled-components'

export const GamingCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  margin-bottom: 24px;
  width: 150px;
`

export const GamingImg = styled.img`
  height: 140px;

  @media screen and (min-width: 768px) {
    height: 200px;
  }
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  padding-top: 5px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const GamingViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  width: 60%;
  margin-top: 0px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#475569')};
`

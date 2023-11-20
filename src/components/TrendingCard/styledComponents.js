import styled from 'styled-components'

export const TrendingCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }

  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const TrendingImg = styled.img`
  width: 100%;
  margin-bottom: 5px;

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const TrendingCardContent = styled.div`
  padding: 8px;
  @media screen and (min-width: 576px) {
    padding-left: 14px;
  }
  display: flex;
`

export const TrendingProfileImg = styled.img`
  width: 40px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 0px;
  margin: 0px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const TrendingDetails = styled.div`
  display: flex;
`

export const TrendingDetail = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 1px;
  color: ${props => (props.theme === 'dark' ? '#64748b' : ' #475569')};
  padding-right: 8px;
`

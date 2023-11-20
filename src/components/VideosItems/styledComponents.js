import styled from 'styled-components'

export const VideosItem = styled.li`
  width: 100%;
  text-decoration: none;
  margin-bottom: 10px;

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 50%;
    padding: 5px;
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 5px;
    height: 100%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoContentContainer = styled.div`
  padding: 8px;
  display: flex;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const VideoTxtContainer = styled.div`
  margin-left: 10px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
  padding-top: 0px;
  margin-top: 0px;
  text-decoration: none;
`

export const VideoDetailsTxt = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #64748b;
  padding-bottom: 0px;
  margin-bottom: 0px;
  padding-right: 10px;
  text-decoration: none;
`

export const VideoViewYearContainer = styled.div`
  display: flex;
  margin-top: 0px;
  padding-top: 0px;
`

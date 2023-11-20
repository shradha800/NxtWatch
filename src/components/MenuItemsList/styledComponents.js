import styled from 'styled-components'

export const MenuList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
`

export const MenuLink = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-decoration: 'none';
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
`

export const MenuHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  text-decoration: 'none';
  padding-left: 16px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`

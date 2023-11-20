import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#f8fafc'};
`

export const LoginContentContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #00000050;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media screen and (min-width: 768px) {
    min-width: 25%;
    max-width: 30%;
  }
`

export const LoginLogo = styled.img`
  width: 120px;

  @media screen and (min-width: 768px) {
    width: 80%;
    padding-top: 30px;
  }
`

export const LoginForm = styled.form`
  padding-top: 20px;
`

export const Label = styled.label`
  color: ${props => (props.color === 'white' ? '#ffffff' : '#94a3b8')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  color: #616e7c;
  margin-bottom: 20px;
  margin-top: 5px;
  outline: none;
`

export const Checkbox = styled.input`
  padding-right: 10px;
  align-self: flex-start;
  height: 15px;
  width: 15px;
`

export const ShowPasswordTxt = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.color === 'white' ? '#ffffff' : '#94a3b8')};
  padding-top: 0px;
  margin-top: 0px;
  padding-left: 5px;
`

export const LoginBtn = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 100%;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 50px;
  padding-top: 10px;
`

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginContentContainer,
  Label,
  Input,
  Checkbox,
  ShowPasswordTxt,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    isError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({isError: false})
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckBox = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  render() {
    const {username, password, passwordType, isError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const theme = isDarkTheme ? 'dark' : 'white'
          const color = isDarkTheme ? 'white' : 'black'

          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer theme={theme}>
              <LoginContentContainer theme={theme}>
                <LoginLogo src={logo} alt="logo" />
                <LoginForm onSubmit={this.submitForm}>
                  <Label htmlFor="username" color={color}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.updateUsername}
                    value={username}
                  />
                  <Label htmlFor="password" color={color}>
                    PASSWORD
                  </Label>
                  <Input
                    type={passwordType}
                    placeholder="Password"
                    id="password"
                    onChange={this.updatePassword}
                    value={password}
                  />
                  <Checkbox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onCheckBox}
                  />
                  <ShowPasswordTxt htmlFor="checkbox" color={color}>
                    Show Password
                  </ShowPasswordTxt>
                  <LoginBtn type="submit">Login</LoginBtn>
                  <ErrorMsg> {isError && `* ${errorMsg}`} </ErrorMsg>
                </LoginForm>
              </LoginContentContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

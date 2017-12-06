import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import TextField from "../components/TextField"
import IconField from "../components/IconField"


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      icon: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleIconChange = this.handleIconChange.bind(this)
  }

  handleFormSubmit() {

  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleIconChange(event) {
    this.setState({ icon: event.target.value })
  }


  render() {

    return(
      <section className="main-section">

        Please enter the following information

        <form className="SignUpForm" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.username}
            label='Desired Username'
            name='username'
            handleChange={this.handleUsernameChange}
          />

          <TextField
            content={this.state.email}
            label='Email'
            name='email'
            handleChange={this.handleEmailChange}
          />

          <TextField
            content={this.state.password}
            label='Password'
            name='password'
            handleChange={this.handlePasswordChange}
          />

          <IconField
            content={this.state.icon}
            label='Icon'
            name='icon'
            handleChange={this.handleIconChange}
          />
        </form>

      </section>
    )
  }
}

export default SignUpContainer

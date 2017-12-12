import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import TextField from "../components/TextField"


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      icon: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addUser = this.addUser.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleIconChange = this.handleIconChange.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('username', this.state.username)
    formPayload.append('email', this.state.email)
    formPayload.append('encypted_password', this.state.password)
    formPayload.append('profile_photo', this.state.icon)
    //   username: this.state.username,
    //   email: this.state.email,
    //   encrypted_password: this.state.password,
    //   profile_photo: this.state.icon
    // }
    debugger;
    this.addUser(formPayload)
  }

  addUser(formPayload) {
    fetch("/api/v1/users", {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
    console.log(this.state.username)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
    console.log(this.state.password)
  }

  handleIconChange(event) {
    this.setState({ icon: event.target.value })
    console.log(this.state.icon)
  }


  render() {



    return(
      <section className="main-section">

        Please enter the following information

        <form className="SignUpForm" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.username}
            label='Desired Username'
            type='text'
            name='username'
            handleChange={this.handleUsernameChange}
          />

          <TextField
            content={this.state.email}
            label='Email'
            type='text'
            name='email'
            handleChange={this.handleEmailChange}
          />

          <TextField
            content={this.state.password}
            label='Password'
            type='text'
            name='password'
            handleChange={this.handlePasswordChange}
          />

          <TextField
            content={this.state.icon}
            label='Upload Profile Image'
            type='file'
            name='icon'
            handleChange={this.handleIconChange}
          />

          <input className="submit" type="submit" value="Submit" />
        </form>

      </section>
    )
  }
}

export default SignUpContainer

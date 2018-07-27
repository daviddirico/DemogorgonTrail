import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import SignInForm from "../components/SignInForm";


class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: "",
      errors: []
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.startSession = this.startSession.bind(this)
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  clearForm(){
    this.setState({
      email: '',
      password: '',
      errors: [],
      success: 'You have successfully signed in!',
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('email', this.state.email)
    formPayload.append('password', this.state.password)
    this.startSession(formPayload)
  }

  startSession(formPayload) {
    fetch("/log_in", {
      method: 'POST',
      body: formPayload,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status === 200) {
        this.clearForm()
        this.props.displayUser()
      } else {
        this.setState({ errors: ["Sign in failed!"] })
      }
    })
  }

  render() {

    let errors;
    if(this.state.errors.length > 0){
      errors = this.state.errors.map( (error, index) => {
        return(
          <div key={index} >{error}</div>
        )
      })
    }

    let success;
    if(this.state.success != '' && !this.props.loading ){
      success = this.state.success
    }


    return(
      <section className="main-section">

        <h3 className="signHeader">Sign In</h3>

        <SignInForm
          success={success}
          errors={errors}
          handleSubmit={this.handleFormSubmit}
          emailContent={this.state.email}
          passwordContent={this.state.password}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
        />

      </section>
    )
  }
}

export default SignInContainer

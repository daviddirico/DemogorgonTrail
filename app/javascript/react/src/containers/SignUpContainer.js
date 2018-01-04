import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import SignUpForm from "../components/SignUpForm";
import PreviewForm from '../components/PreviewForm'


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      image: "",
      errors: [],
      success: '',
      previewVisible: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addUser = this.addUser.bind(this)
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

  handlePasswordConfirmationChange(event) {
    this.setState({ passwordConfirmation: event.target.value })
    console.log(this.state.passwordConfirmation)
  }


  clearForm(){
    this.setState({
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      image: '',
      errors: [],
      success: 'You have successfully signed up!',
      previewVisible: false
    })
  }

  onDrop(event){
    if(event.length == 1){
      this.setState({ image: event[0], errors: [], previewVisible: true, success: '' })
    } else {
      this.setState({ errors: "Please only upload one image."})
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('username', this.state.username)
    formPayload.append('email', this.state.email)
    formPayload.append('password', this.state.password)
    formPayload.append('password_confirmation', this.state.passwordConfirmation)
    formPayload.append('profile_photo', this.state.image)
    this.addUser(formPayload)
  }

  addUser(formPayload) {
    fetch("/api/v1/users", {
      method: 'POST',
      body: formPayload,
      credentials: 'same-origin'
    })
    .then(response => {
      debugger;
      if (response.status === 200) {
        this.clearForm()
      } else {
        this.setState({ errors: ["Sign up failed!"] })
      }
    })
  }

  render() {

    let errors;
    if(this.state.errors.length > 0){
      errors = this.state.errors.map( (error, index) => {
        return(
          <p key={index} >{error}</p>
        )
      })
    }

    // let dropzoneStyle = {
    //   background: 'none',
    //   border: '3px dotted grey',
    //   height: '150px'
    // }

    let success;
    if(this.state.success != '' && !this.props.loading ){
      success = <h4>{this.state.success}</h4>
    }

    // let style = {
    //   container: {
    //     position: 'relative',
    //   },
    //   refresh: {
    //     display: 'inline-block',
    //     position: 'relative',
    //   },
    // };


    let loading;
    if(this.props.loading){
      loading = <div><RefreshIndicator size={50} left={0} top={25} loadingColor="#FF9800" status="loading"/></div>
    }

    let preview;
    if(this.state.previewVisible){
      preview = <PreviewForm image={this.state.image.preview}/>
    }

    return(
      <section className="main-section">

        <Link to='/'>Return Home</Link>

        <SignUpForm
          success={success}
          preview={preview}
          loading={loading}
          errors={errors}
          handleSubmit={this.handleFormSubmit}
          usernameContent={this.state.username}
          emailContent={this.state.email}
          passwordContent={this.state.password}
          passwordConfirmationContent={this.state.passwordConfirmation}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handlePasswordConfirmationChange={this.handlePasswordConfirmationChange}
          onDrop={this.onDrop}
          imageValue={this.state.image.preview}
        />

      </section>
    )
  }
}

export default SignUpContainer

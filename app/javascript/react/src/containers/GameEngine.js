import React, { Component } from 'react'
import CharacterForm from "./CharacterForm"

class GameEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      campaignInfo: {},
      visible: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
  }

  // componentDidMount(){
  //   fetch('/api/v1/users', {
  //     credentials: 'same-origin',
  //     method: 'GET',
  //     headers: { 'Content-Type':'application/json'}
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({ signedIn: body.signed_in, currentUser: body.current_user})
  //   })
  // }

  handleSubmit(event) {
    debugger;
    event.preventDefault()
    this.createCampaign()
  }

  createCampaign() {
    fetch("/api/v1/campaigns", {
      method: 'POST',
      body: JSON.stringify(this.state.currentUser),
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ campaignInfo: body.campaign, visible: true })
    })
  }

  render() {

    let characterForm
    if (this.state.visible) {
      characterForm = <CharacterForm />
    } else {
      characterForm = <button onClick={this.handleSubmit}>Start your Campaign!</button>
    }

    return(
      <div>
        {characterForm}
      </div>
    )
  }
}

export default GameEngine

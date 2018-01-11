import React, { Component } from 'react'
import CharacterForm from "./CharacterForm"

class GameEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      campaignInfo: {},
      visible: false,
      character: {}
    }
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/campaigns', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      if (body.campaign != {}) {
        this.setState({ campaignInfo: body.campaign, visible: true })
      }
    })
  }

  handleCampaignSubmit(event) {
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

  handleCharacterSubmit(formPayload) {
    event.preventDefault()
    this.createCharacter(formPayload)
  }

  createCharacter(formPayload) {
    fetch("/api/v1/characters", {
      method: 'POST',
      body: formPayload,
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ character: {} })
    })
  }

  render() {

    let characterForm
    if (this.state.visible) {
      characterForm = <CharacterForm handleCharacterSubmit={this.handleCharacterSubmit} />
    } else {
      characterForm = <button onClick={this.handleCampaignSubmit}>Start your Campaign!</button>
    }

    return(
      <div>
        {characterForm}
      </div>
    )
  }
}

export default GameEngine

import React, { Component } from 'react'
import CharacterForm from "./CharacterForm"
import HubScreen from "./HubScreen"

class GameEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      campaign: {},
      campaignMade: false,
      characterMade: false,
      character: {}
    }
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
    this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this)
    this.createCharacter = this.createCharacter.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/campaigns', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      if (body.campaign !== null) {
        this.setState({ campaign: body.campaign, campaignMade: true })
      }
    })

    fetch('/api/v1/characters', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      if (body.character !== null) {
        this.setState({ character: body.character, characterMade: true })
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
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      if (body.campaign !== null) {
        this.setState({ campaign: body.campaign, campaignMade: true })
      }
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
      if (body.character !== null) {
        this.setState({ character: body.character, characterMade: true })
      }
    })
  }

  render() {
    let pageRender
    if (this.state.campaignMade && this.state.characterMade && this.state.character.gameover === false) {
      pageRender = <HubScreen character={this.state.character} campaign={this.state.campaign} />
    } else if (this.state.campaignMade) {
      pageRender = <CharacterForm handleCharacterSubmit={this.handleCharacterSubmit} />
    } else {
      pageRender = <button onClick={this.handleCampaignSubmit}>Start your Campaign!</button>
    }


    return(
      <div>
        {pageRender}
      </div>
    )
  }
}

export default GameEngine

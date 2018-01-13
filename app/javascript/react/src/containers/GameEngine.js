import React, { Component } from 'react'
import CharacterForm from "./CharacterForm"

class GameEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      campaign: {},
      visible: false,
      character: {},
      inventory: {}
    }
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
    this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this)
    this.createCharacter = this.createCharacter.bind(this)
    this.createInventory = this.createInventory.bind(this)
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
      console.log(body.campaign)
      if (body.campaign != {}) {
        this.setState({ campaign: body.campaign, visible: true })
      }
    })

    fetch('/api/v1/characters', {
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
      console.log(body.character)
      if (body.character != {}) {
        this.setState({ character: body.character })
      }
    })

    fetch('/api/v1/inventories', {
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
      console.log(body.inventory)
      if (body.inventory != {}) {
        this.setState({ inventory: body.inventory })
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
      this.setState({ campaign: body.campaign, visible: true })
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
      this.setState({ character: body.character })
    })
    this.createInventory()
  }

  createInventory() {
    fetch("/api/v1/inventories", {
      method: 'POST',
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ inventory: body.inventory })
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

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HubInventory from '../components/HubInventory'
import EventContainer from './EventContainer'

class HubScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: this.props.campaign,
      character: this.props.character,
      inventory: null,
      paused: true
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.fetchCharacter = this.fetchCharacter.bind(this)
    this.fetchCampaign = this.fetchCampaign.bind(this)
  }

  handleButtonClick(event) {
    event.preventDefault()
    if (this.state.paused === true) {
      this.setState({ paused: false })
    } else {
      this.setState({ paused: true })
    }
    if (this.state.campaign.completion === 0) {
      let formPayload = new FormData()
      formPayload.append('completion', 'initial')
      fetch(`/api/v1/campaigns/${this.state.campaign.id}`, {
        credentials: 'same-origin',
        method: 'PATCH',
        body: formPayload
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ campaign: body.campaign })
      })
    }
    this.fetchCampaign()
    this.fetchCharacter()
  }

  fetchCharacter() {
    fetch('/api/v1/characters', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ character: body.character })
    })
  }

  fetchCampaign() {
    fetch('/api/v1/campaigns', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ campaign: body.campaign })
    })
  }

  render() {

    let gameplayScreen
    if (this.state.paused === true) {
      gameplayScreen =  <HubInventory
                          handleButtonClick={this.handleButtonClick}
                          campaign={this.state.campaign}
                          character={this.state.character}
                          inventory={this.state.inventory}
                        />
    } else {
      gameplayScreen =  <EventContainer handleDeath={this.props.handleDeath} handleButtonClick={this.handleButtonClick} />
    }

    return(
      <div>
        {gameplayScreen}
      </div>
    )
  }
}

export default HubScreen

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
      inventory: this.props.inventory,
      paused: true
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.fetchCharacter = this.fetchCharacter.bind(this)
    this.fetchCampaign = this.fetchCampaign.bind(this)
    this.fetchInventory = this.fetchInventory.bind(this)
    this.itemInteract = this.itemInteract.bind(this)
    this.processItem = this.processItem.bind(this)
  }

  handleButtonClick(event) {
    event.preventDefault()
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
    if (this.state.paused === true) {
      this.setState({ paused: false })
    } else {
      this.setState({ paused: true })
    }
    this.fetchCampaign()
    this.fetchCharacter()
    this.fetchInventory()
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

  fetchInventory() {
    fetch('/api/v1/inventories', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ inventory: body.inventory })
    })
  }

  itemInteract(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('attainment_type', event.target.name)
    formPayload.append('item_name', event.target.value)
    this.processItem(formPayload)
  }

  processItem(formPayload) {
    event.preventDefault()
    fetch(`/api/v1/inventories/${this.state.inventory.id}`, {
      credentials: 'same-origin',
      body: formPayload,
      method: 'PATCH'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ inventory: body.inventory, character: body.character })
    })
  }

  render() {

    let gameplayScreen
    if (this.state.paused === true) {
      gameplayScreen =  <HubInventory
                          handleButtonClick={this.handleButtonClick}
                          itemInteract={this.itemInteract}
                          campaign={this.state.campaign}
                          character={this.state.character}
                          inventory={this.state.inventory}
                        />
    } else {
      gameplayScreen =  <EventContainer
                          handleDeath={this.props.handleDeath}
                          handleButtonClick={this.handleButtonClick}
                          campaign={this.state.campaign}
                        />
    }

    return(
      <div>
        {gameplayScreen}
      </div>
    )
  }
}

export default HubScreen

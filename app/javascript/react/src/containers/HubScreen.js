import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HubInventory from '../components/HubInventory'
import EventContainer from './EventContainer'
import ItemPopUp from "../components/ItemPopUp"
import SimplePopUp from "../components/SimplePopUp"

class HubScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: this.props.campaign,
      character: this.props.character,
      inventory: this.props.inventory,
      paused: true,
      selectedItem: false,
      showPopUp: false,
      statusPopUp: false,
      items: false,
      eventItem: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.fetchCharacter = this.fetchCharacter.bind(this)
    this.fetchCampaign = this.fetchCampaign.bind(this)
    this.fetchInventory = this.fetchInventory.bind(this)
    this.itemInteract = this.itemInteract.bind(this)
    this.processItem = this.processItem.bind(this)
    this.checkHealth = this.checkHealth.bind(this)
    this.preToggle = this.preToggle.bind(this)
    this.togglePopUp = this.togglePopUp.bind(this)
    this.simpleClick = this.simpleClick.bind(this)
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
    formPayload.append('attainment_type', event.currentTarget.name)
    formPayload.append('item_name', event.currentTarget.value)
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
    .then(this.checkHealth)
  }

  checkHealth() {
    if (this.state.character.gameover) {
      this.setState({ statusPopUp: true })
    }
  }

  simpleClick(event) {
    event.preventDefault()
    this.setState({
      statusPopUp: false
    })
    if (this.state.character.gameover) {
      this.props.handleDeath()
    }
  }

  preToggle(event) {
    event.preventDefault()
    this.setState({ eventItem: event.target.attributes.value.value })
    fetch("/api/v1/items", {
      credentials: 'same-origin',
      headers: { 'Content-Type':'application/json'},
      method: 'GET',
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ items: body.items })
    })
    .then(this.togglePopUp)
  }

  togglePopUp(event) {
    let itemEvent
    if (this.state.items && this.state.showPopUp === false) {
      this.state.items.forEach((item) => {
        if (item.name === this.state.eventItem) {
          itemEvent = item.id
        }
      })
    } else if (this.state.showPopUp === false) {
      event.preventDefault()
      itemEvent = event.target.attributes.value.value
    }
    if (this.state.showPopUp === false) {
      fetch(`/api/v1/items/${itemEvent}`, {
        credentials: 'same-origin',
        method: 'GET'
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ selectedItem: body.item, showPopUp: true })
      })
    } else {
      this.setState({ selectedItem: false, showPopUp: false, items: false, eventItem: false })
    }
  }

  render() {
    let gameplayScreen
    if (this.state.statusPopUp === true) {
      gameplayScreen =  <SimplePopUp
                          fromHub="true"
                          simpleClick={this.simpleClick}
                          character={this.state.character}
                        />
    } else if (this.state.paused === true) {
      gameplayScreen =  <HubInventory
                          handleButtonClick={this.handleButtonClick}
                          itemInteract={this.itemInteract}
                          campaign={this.state.campaign}
                          character={this.state.character}
                          inventory={this.state.inventory}
                          detailClick={this.togglePopUp}
                          consumableClick={this.preToggle}
                        />
    } else {
      gameplayScreen =  <EventContainer
                          handleDeath={this.props.handleDeath}
                          handleButtonClick={this.handleButtonClick}
                          campaign={this.state.campaign}
                        />
    }

    let shownPopUp
    if (this.state.showPopUp) {
      shownPopUp =  <ItemPopUp
                      item={this.state.selectedItem}
                      closePopUp={this.togglePopUp}
                    />
    }


    return(
      <div>
        {gameplayScreen}
        {shownPopUp}
      </div>
    )
  }
}

export default HubScreen

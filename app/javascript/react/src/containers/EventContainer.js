import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EventOptions from '../components/EventOptions';
import EventComponent from '../components/EventComponent';
import TownComponent from '../components/TownComponent';
import LootComponent from '../components/LootComponent';
import SimplePopUp from '../components/SimplePopUp';


class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: false,
      character: false,
      inventory: false,
      campaign: this.props.campaign,
      popUp: false,
      errorText: false,
      confirmation: false
    }
    this.handleCaveSubmit = this.handleCaveSubmit.bind(this)
    this.handleTrailSubmit = this.handleTrailSubmit.bind(this)
    this.handleTownSubmit = this.handleTownSubmit.bind(this)
    this.fetchEncounter = this.fetchEncounter.bind(this)
    this.runFromBattle = this.runFromBattle.bind(this)
    this.fightWithEnemies = this.fightWithEnemies.bind(this)
    this.evaluateBattleChoice = this.evaluateBattleChoice.bind(this)
    this.takeItem = this.takeItem.bind(this)
    this.processItem = this.processItem.bind(this)
    this.clearEvent = this.clearEvent.bind(this)
    this.simpleClick = this.simpleClick.bind(this)
    this.handleYesClick = this.handleYesClick.bind(this)
    this.handleNoClick = this.handleNoClick.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/events', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
       this.setState({ currentEvent: body.event })
    })

    fetch('/api/v1/characters', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
       this.setState({ character: body.character, inventory: body.inventory })
    })
  }

  handleCaveSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('event_type', 'enemy')
    this.fetchEncounter(formPayload)
  }

  handleTrailSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('event_type', 'trail')
    this.fetchEncounter(formPayload)
  }

  handleTownSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('event_type', 'town')
    this.fetchEncounter(formPayload)
  }

  fetchEncounter(formPayload) {
    fetch('/api/v1/events', {
      credentials: 'same-origin',
      method: 'POST',
      body: formPayload
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ currentEvent: body.event })
    })
  }

  runFromBattle(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('battle_choice', 'run')
    this.evaluateBattleChoice(formPayload)
  }

  fightWithEnemies(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('battle_choice', 'fight')
    this.evaluateBattleChoice(formPayload)
  }

  evaluateBattleChoice(formPayload) {
    fetch(`/api/v1/characters/${this.state.character.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: formPayload
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ character: body.character })
      if (this.state.character.recent_changes) {
        this.setState({ popUp: true })
      }
      return this.clearEvent()
    })
  }

  takeItem(event) {
    event.preventDefault()
    if (this.state.inventory.weapon && this.state.currentEvent.info[0].item_type === "weapon") {
      this.setState({ errorText: "You already have a weapon.  Do you wish to replace it?", confirmation: true })
    } else if (this.state.inventory.armor && this.state.currentEvent.info[0].item_type === "armor") {
      this.setState({ errorText: "You are already wearing armor. Do you wish to replace it?", confirmation: true })
    // } else if (this.state.inventory.collection >= 5 && this.state.currentEvent.info.droppable === true) {
    //   this.setState({ errorText: "Your inventory is full. You must make room for this item if you wish to collect it." })
    } else {
      let formPayload = new FormData()
      formPayload.append('attainment_type', 'find')
      this.processItem(formPayload)
    }
  }

  processItem(formPayload) {
    fetch(`/api/v1/inventories/${this.state.inventory.id}`, {
      method: 'PATCH',
      body: formPayload,
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ inventory: body.inventory })
      return this.clearEvent()
    })
  }

  clearEvent() {
    fetch(`/api/v1/events/${this.state.currentEvent.id}`, {
      credentials: 'same-origin',
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ currentEvent: body.event })
    })
  }

  simpleClick(event) {
    event.preventDefault()
    this.setState({
      popUp: false
    })
    if (this.state.character.gameover) {
      this.props.handleDeath()
    }
  }

  handleYesClick(event) {
    event.preventDefault()
    this.setState({ confirmation: false, errorText: false })
    let formPayload = new FormData()
    formPayload.append('attainment_type', 'find')
    this.processItem(formPayload)
  }

  handleNoClick(event) {
    event.preventDefault()
    this.setState({ confirmation: false, errorText: false })
  }

  render() {
    let theCrossRoads
    if (this.state.popUp) {
      theCrossRoads = <SimplePopUp
                        simpleClick={this.simpleClick}
                        character={this.state.character}
                      />
    } else if (this.state.currentEvent.name === "town") {
      theCrossRoads = <TownComponent
                        handleClick={this.clearEvent}
                        currentEvent={this.state.currentEvent}
                      />
    } else if (this.state.currentEvent.name === "loot") {
      theCrossRoads = <LootComponent
                        handleClick={this.clearEvent}
                        handleTakeItemClick={this.takeItem}
                        handleInventoryClick={this.props.handleButtonClick}
                        currentEvent={this.state.currentEvent}
                        errorText={this.state.errorText}
                        confirmation={this.state.confirmation}
                        handleYesClick={this.handleYesClick}
                        handleNoClick={this.handleNoClick}
                      />
    } else if (this.state.currentEvent) {
      theCrossRoads = <EventComponent
                        handleInventoryClick={this.props.handleButtonClick}
                        handleFightClick={this.fightWithEnemies}
                        handleRunClick={this.runFromBattle}
                        currentEvent={this.state.currentEvent}
                      />
    } else {
      theCrossRoads = <EventOptions
                        handleInventoryClick={this.props.handleButtonClick}
                        handleCaveSubmit={this.handleCaveSubmit}
                        handleTrailSubmit={this.handleTrailSubmit}
                        handleTownSubmit={this.handleTownSubmit}
                        campaign={this.state.campaign}
                      />
    }

    return(
      <section>
        {theCrossRoads}
      </section>
    )
  }
}

export default EventContainer

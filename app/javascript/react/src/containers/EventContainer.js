import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EventOptions from '../components/EventOptions';
import EventComponent from '../components/EventComponent';
import SimplePopUp from '../components/SimplePopUp';


class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: false,
      character: false,
      popUp: false
    }
    this.handleCaveSubmit = this.handleCaveSubmit.bind(this)
    this.fetchEncounter = this.fetchEncounter.bind(this)
    this.runFromBattle = this.runFromBattle.bind(this)
    this.fightWithEnemies = this.fightWithEnemies.bind(this)
    this.evaluateBattleChoice = this.evaluateBattleChoice.bind(this)
    this.clearEvent = this.clearEvent.bind(this)
    this.simpleClick = this.simpleClick.bind(this)
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
       this.setState({ character: body.character })
    })
  }

  handleCaveSubmit(event) {
    event.preventDefault()
    let formPayload = new FormData()
    formPayload.append('event_type', 'enemy')
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

  render() {

    let theCrossRoads
    if (this.state.popUp) {
      theCrossRoads = <SimplePopUp
                        simpleClick={this.simpleClick}
                        character={this.state.character}
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
                        handleSubmit={this.handleCaveSubmit}
                      />
    }

    return(
      <section className="main-section">
        {theCrossRoads}
      </section>
    )
  }
}

export default EventContainer

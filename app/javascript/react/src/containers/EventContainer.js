import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import EventOptions from '../components/EventOptions';
import EventComponent from '../components/EventComponent';


class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: false
    }
    this.handleCaveSubmit = this.handleCaveSubmit.bind(this)
    this.fetchEncounter = this.fetchEncounter.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/events', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => response.json())
    .then(body => {
       this.setState({ event: body.event })
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
      this.setState({ event: body.event })
    })
  }

  render() {

    let theCrossRoads
    if (this.state.event) {
      theCrossRoads = <EventComponent event={this.state.event} />
    } else {
      theCrossRoads = <EventOptions handleSubmit={this.handleCaveSubmit} />
    }

    return(
      <section className="main-section">
        {theCrossRoads}
        <Link to="/game">Return to Inventory</Link>
      </section>
    )
  }
}

export default EventContainer

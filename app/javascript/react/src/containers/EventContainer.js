import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/events', {
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


  render() {

    let theCrossRoads = <div></div>

    return(
      <section className="main-section">
        {theCrossRoads}
      </section>
    )
  }
}

export default EventContainer

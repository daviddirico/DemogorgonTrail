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
  }

  handleButtonClick(event) {
    event.preventDefault()
    if (this.state.paused === true) {
      this.setState({ paused: false })
    } else {
      this.setState({ paused: true })
    }
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
      gameplayScreen =  <EventContainer handleButtonClick={this.handleButtonClick} />
    }

    return(
      <div>
        {gameplayScreen}
      </div>
    )
  }
}

export default HubScreen

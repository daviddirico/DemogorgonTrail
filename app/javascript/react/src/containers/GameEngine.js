import React, { Component } from 'react'
import CharacterForm from "./CharacterForm"
import HubScreen from "./HubScreen"
import StartCampaign from "../components/StartCampaign"

class GameEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      campaign: this.props.campaign,
      character: this.props.character,
      inventory: this.props.inventory
    }
    this.handleCampaignSubmit = this.handleCampaignSubmit.bind(this)
    this.createCampaign = this.createCampaign.bind(this)
    this.handleCharacterSubmit = this.handleCharacterSubmit.bind(this)
    this.createCharacter = this.createCharacter.bind(this)
    this.handleDeath = this.handleDeath.bind(this)
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
      if (body.campaign) {
        this.setState({ campaign: body.campaign })
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
      if (body.character) {
        this.setState({ character: body.character, inventory: body.inventory })
      }
    })
  }

  handleDeath() {
    fetch(`/api/v1/campaigns/${this.state.campaign.id}`, {
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({ campaign: false, character: false })
      }
    })
  }

  render() {
    let pageRender
    if (this.state.campaign && this.state.character) {
      pageRender =  <HubScreen
                      handleDeath={this.handleDeath}
                      character={this.state.character}
                      campaign={this.state.campaign}
                      inventory={this.state.inventory}
                    />
    } else if (this.state.campaign) {
      pageRender =  <CharacterForm
                      handleCharacterSubmit={this.handleCharacterSubmit}
                    />
    } else {
      pageRender =  <StartCampaign
                      handleCampaignSubmit={this.handleCampaignSubmit}
                    />
    }


    return(
      <section className="main-section">
        <div className="gameWrapper">
          {pageRender}
        </div>
      </section>
    )
  }
}

export default GameEngine

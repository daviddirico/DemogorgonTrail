import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class HubScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: this.props.campaign,
      character: this.props.character,
      inventory: null
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {

  }


  render() {

    let itemsOwned
    if (this.state.inventory === null) {
      itemsOwned = <div>You do not own a single item to display!</div>
    } else {
      itemsOwned = <InventoryTile />
    }

    let buttonText
    if (this.state.campaign.completion === 0) {
      buttonText = <div>Begin Quest</div>
    } else {
      buttonText = <div>Resume Quest</div>
    }

    return(
      <div>

        <div className="hubTop">
          <div className="small-6 columns hubWrapper">
            <div className="hubFieldTop">
              Map of progress
            </div>
          </div>
          <div className="small-6 columns hubWrapper">
            <div className="hubFieldTop">
              <div className="small-6 columns hubCharacter">
                Character stats: <br/>
                {this.state.character.name} - Level {this.state.character.level} <br/>
                {this.state.character.race} {this.state.character.classification} <br/>
                {this.state.character.hitpoints} HP <br/>
                {this.state.character.strength} Strength <br/>
                {this.state.character.defense} Defense <br/>
              </div>
              <div className="small-6 columns hubInventory">
                Inventory: <br/>
                {itemsOwned}
              </div>
            </div>
          </div>
        </div>
        <div className="hubBottom">
          <div className="small-8 columns hubWrapper">
            <div className="hubFieldBottom">
              Quest Log
            </div>
          </div>
          <div className="small-4 columns hubWrapper">
            <div className="hubFieldBottom">
              <Link to="/game/event" onClick={this.handleButtonClick}>
                <button className="continueQuestButton">{buttonText}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HubScreen

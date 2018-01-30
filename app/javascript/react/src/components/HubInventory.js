import React from 'react';

const HubInventory = props => {

  let itemsOwned
  if (props.inventory === null) {
    itemsOwned = <div>You do not own a single item to display!</div>
  } else {
    itemsOwned = <InventoryTile />
  }

  let buttonText
  if (props.campaign.completion === 0) {
    buttonText = <div>Begin Quest</div>
  } else {
    buttonText = <div>Continue Quest</div>
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
              {props.character.name} - Level {props.character.level} <br/>
              {props.character.race} {props.character.classification} <br/>
              {props.character.current_hitpoints}/{props.character.max_hitpoints} HP <br/>
              {props.character.current_strength}/{props.character.max_strength} Strength <br/>
              {props.character.current_defense}/{props.character.max_defense} Defense <br/>
              {props.character.current_speed}/{props.character.max_speed} Speed <br/>
              {props.character.experience} experience
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
            <button className="continueQuestButton" onClick={props.handleButtonClick}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HubInventory;

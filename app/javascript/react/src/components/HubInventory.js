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
              {props.character.name} - Level {props.character.level} <br/>
              {props.character.race} {props.character.classification} <br/>
              {props.character.hitpoints} HP <br/>
              {props.character.strength} Strength <br/>
              {props.character.defense} Defense <br/>
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

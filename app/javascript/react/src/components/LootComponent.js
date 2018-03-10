import React from 'react';

const LootComponent = props => {

  let errorText;
  let confirmation;
  if (props.errorText) {
    errorText = <div>{props.errorText}</div>
    if (props.confirmation) {
      confirmation = <div>
                        <button onClick={props.handleYesClick}>Yes</button>
                        <button onClick={props.handleNoClick}>No</button>
                      </div>
    }
  }
  let foundItem = props.currentEvent.info[0].name
  let itemImage = <img className="itemImage" src={ require(`../../../../assets/images/items/${props.currentEvent.info[0].name}`) }/>


  return(
    <div>
      <div>You found: {foundItem}</div>
      {itemImage}
      <div>
        {errorText}
        {confirmation}
      </div>
      <div className="optionsText">
        What do you wish to do? <br/>
      </div>
      <div className="listOfBattleOptions">
        <div className="fightRun">
          <button className="battleButton leftBattleTile" onClick={props.handleTakeItemClick}>Take Loot</button>
          <button className="battleButton rightBattleTile" onClick={props.handleClick}>Leave Loot</button>
        </div>
        <button className="inventoryButton" onClick={props.handleInventoryClick}>Check Inventory</button>
      </div>
    </div>
  )
}

export default LootComponent;

import React from 'react';

const LootComponent = props => {

  let errorText
  let confirmation
  if (props.errorText) {
    errorText = <div>{props.errorText}</div>
    if (props.confirmation) {
      confirmation = <div>
                        <button onClick={props.handleYesClick}>Yes</button>
                        <button onClick={props.handleNoClick}>No</button>
                      </div>
    }
  }

  let foundItems
  if (props.currentEvent.info.length > 1) {
    foundItems = props.currentEvent.info.map((item) => {
      return item.name
    })
  } else {
    foundItems = props.currentEvent.info[0].name
  }


  return(
    <div>
      <div>You found: {foundItems}</div>
      <div>
        {errorText}
        {confirmation}
      </div>
      <div>
        <button className="lootButton" onClick={props.handleTakeItemClick}>Take Loot</button>
        <button className="lootButton" onClick={props.handleClick}>Leave Loot</button>
      </div>
      <button onClick={props.handleInventoryClick}>Check Inventory</button>
    </div>
  )
}

export default LootComponent;

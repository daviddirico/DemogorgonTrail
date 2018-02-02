import React from 'react';

const EventOptions = props => {

  let townSlot
  if (props.campaign.completion % 10 === 0) {
    townSlot = <div>Search nearby town</div>
  } else {
    townSlot = <div></div>
  }

  return(
    <div>
      {townSlot}
      <button>Continue along the trail</button>
      <button onClick={props.handleSubmit}>Attempt nearby dungeon</button>
      <div>
        <button onClick={props.handleInventoryClick}>Return to Inventory</button>
      </div>
    </div>
  )
}

export default EventOptions;

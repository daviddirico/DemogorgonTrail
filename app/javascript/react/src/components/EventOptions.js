import React from 'react';

const EventOptions = props => {

  let townSlot
  if (props.campaign.completion % 10 === 0 || props.campaign.completion === 1) {
    townSlot = <button onClick={props.handleTownSubmit}>Search nearby town</button>
  } else {
    townSlot = <div></div>
  }

  return(
    <div>
      {townSlot}
      <button onClick={props.handleTrailSubmit}>Continue along the trail</button>
      <button onClick={props.handleCaveSubmit}>Attempt nearby dungeon</button>
      <div>
        <button onClick={props.handleInventoryClick}>Return to Inventory</button>
      </div>
    </div>
  )
}

export default EventOptions;

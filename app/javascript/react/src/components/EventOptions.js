import React from 'react';

const EventOptions = props => {

  let townSlot
  if (props.campaign.completion % 10 === 0 || props.campaign.completion === 1) {
    townSlot = <button className="routeOptionButton" onClick={props.handleTownSubmit}>Search nearby town</button>
  } else {
    townSlot = <div></div>
  }

  return(
    <div>
      {townSlot}
      <button className="routeOptionButton" onClick={props.handleTrailSubmit}>Continue along the trail</button>
      <button className="routeOptionButton" onClick={props.handleCaveSubmit}>Attempt nearby dungeon</button>
      <div className="inventoryButtonWrapper">
        <button className="inventoryButton" onClick={props.handleInventoryClick}>Check Inventory</button>
      </div>
    </div>
  )
}

export default EventOptions;

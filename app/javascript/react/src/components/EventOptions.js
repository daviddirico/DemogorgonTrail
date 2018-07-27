import React from 'react';

const EventOptions = props => {

  let townSlot
  if (props.campaign.completion % 10 === 0 || props.campaign.completion === 1) {
    townSlot =  <div className="routeOptionButton">
                  <div className="eventImageContainer">
                    <img className="eventImage" src={ require("../../../../assets/images/events/town") }/>
                  </div>
                  <button className="optionButton" onClick={props.handleTownSubmit}>Search nearby town</button>
                </div>
  } else {
    townSlot = <div></div>
  }

  return(
    <div>
      <div className="routeOptionContainer">
        {townSlot}
        <div className="routeOptionButton">
          <div className="eventImageContainer">
            <img className="eventImage" src={ require("../../../../assets/images/events/trail") }/>
          </div>
          <button className="optionButton" onClick={props.handleTrailSubmit}>Continue along the trail</button>
        </div>
        <div className="routeOptionButton">
          <div className="eventImageContainer">
            <img className="eventImage" src={ require("../../../../assets/images/events/dungeon") }/>
          </div>
          <button className="optionButton" onClick={props.handleCaveSubmit}>Attempt nearby dungeon</button>
        </div>
      </div>
      <div className="inventoryButtonWrapper">
        <button className="inventoryButton" onClick={props.handleInventoryClick}>Check Inventory</button>
      </div>
    </div>
  )
}

export default EventOptions;

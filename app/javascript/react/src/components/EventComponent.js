import React from 'react';

const EventComponent = props => {

  let encounter;
  let enemiesDisplay;
  let enemyInfo;
  let mapKey;
  if (props.currentEvent.info.length > 1) {
    encounter = <div>A group of enemies have appeared!</div>
    enemiesDisplay = props.currentEvent.info.map((enemy, index) => {
      mapKey += 1
      return <img className="enemyImage" key={index} src={ require(`../../../../assets/images/enemies/${enemy.race}-${enemy.classification}`) }/>
    })
  } else {
    encounter = <div>A {props.currentEvent.info[0].name} has appeared!</div>
    enemyInfo = props.currentEvent.info[0]
    enemiesDisplay = <img className="enemyImage" src={ require(`../../../../assets/images/enemies/${enemyInfo.race}-${enemyInfo.classification}`) }/>
  }

  return(
    <div>
      <div className="encounterText">
        {encounter}
      </div>
      <div className="dungeonEvent">
        {enemiesDisplay} <br/>
      </div>
      <div className="optionsText">
        What do you wish to do? <br/>
      </div>
      <div className="listOfBattleOptions">
        <div className="fightRun">
          <button className="battleButton leftBattleTile" onClick={props.handleFightClick}>Fight</button>
          <button className="battleButton rightBattleTile" onClick={props.handleRunClick}>Run</button>
        </div>
        <button className="inventoryButton" onClick={props.handleInventoryClick}>Check Inventory</button>
      </div>
    </div>
  )
}

export default EventComponent;

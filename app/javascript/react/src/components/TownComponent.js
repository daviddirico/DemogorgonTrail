import React from 'react';

const TownComponent = props => {

  // let encounter;
  // let enemiesDisplay;
  // let enemyInfo;
  // let mapKey;
  // if (props.currentEvent.info.length > 1) {
  //   encounter = <div>A group of enemies have appeared!</div>
  //   enemiesDisplay = props.currentEvent.info.map((enemy, index) => {
  //     mapKey += 1
  //     return <img className="enemyImage" key={index} src={ require(`../../../../assets/images/enemies/${enemy.race}-${enemy.classification}`) }/>
  //   })
  // } else {
  //   encounter = <div>A {props.currentEvent.info[0].name} has appeared!</div>
  //   enemyInfo = props.currentEvent.info[0]
  //   enemiesDisplay = <img className="enemyImage" src={ require(`../../../../assets/images/enemies/${enemyInfo.race}-${enemyInfo.classification}`) }/>
  // }

  return(
    <div>
      <div>You have entered Town...</div>
      <button className="townButton" onClick={props.handleClick}>Leave Town</button>
    </div>
  )
}

export default TownComponent;

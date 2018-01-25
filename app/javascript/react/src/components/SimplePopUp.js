import React from 'react';

const SimplePopUp = props => {

  let initialResult
  if (props.changedHitpoints === true && props.changedLevel === true && changedExperience === true) {
    initialResult = <div>You are victorious and have increased in power!  You have taken some damage from this battle.</div>
  } else if (props.changedHitpoints === true && props.changedExperience) {
    initialResult = <div>You are victorious, but took some damage in the process.</div>
  } else if (props.changedLevel === true) {
    initialResult = <div>You have flawlessly won the battle and have increased in power!</div>
  } else if (props.changedExperience === true) {
    initialResult = <div>You have flawlessly won the battle!</div>
  } else if (props.changedHitpoints === true) {
    initialResult = <div>You managed to escape but took some damage in doing so!</div>
  } else if (props.hasDied === true) {
    initialResult = <div>OH NO!!! You have been slain! Your adventure ends here...</div>
  }

  return(
    <div>
      {initialResult}
      <button onClick={props.simpleClick}>OK</button>
    </div>
  )
}

export default SimplePopUp;

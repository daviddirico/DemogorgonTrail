import React from 'react';

const SimplePopUp = props => {

  let changes
  let initialResult
  if (props.character.recent_changes) {
    changes = props.character.recent_changes

    if (changes.includes("gameover")) {
      initialResult = <div>OH NO!!! You have been slain! Your adventure ends here...</div>
    } else if (changes.includes("hp") && changes.includes("experience") && changes.includes("level")) {
      initialResult = <div>You are victorious and have increased in power!  You have taken some damage from this battle.</div>
    } else if (changes.includes("hp") && changes.includes("experience")) {
      initialResult = <div>You are victorious, but took some damage in the process.</div>
    } else if (changes.includes("level")) {
      initialResult = <div>You have flawlessly won the battle and have increased in power!</div>
    } else if (changes.includes("experience")) {
      initialResult = <div>You have flawlessly won the battle!</div>
    } else if (changes.includes("hp")) {
      initialResult = <div>You managed to escape but took some damage in doing so!</div>
    } else {
    initialResult = <div>You managed to escape.</div>
    }
  } else {
    initialResult = <div>An error has occurred!</div>
  }

  return(
    <div className="simplePopUp" onClick={props.simpleClick}>
      {initialResult}
      <button>OK</button>
    </div>
  )
}

export default SimplePopUp;

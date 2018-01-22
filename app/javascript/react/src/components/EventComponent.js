import React from 'react';

const EventComponent = props => {


  let encounter;
  if (props.event.info.length > 1) {
    encounter = <div>A group of enemies have appeared!</div>
  } else {
    encounter = <div>A {props.event.info[0].name} has appeared!</div>
  }

  // let number = props.event.info.length
  // if (props.event.info.length > 1) {
  //   encounter = props.event.info.map( enemy => {
  //     return enemy.name
  //   })
  // } else {
  //   encounter = props.event.info[0].name
  // }

  return(
    <div>
      {encounter} <br/>
      What do you wish to do? <br/>
      <div>
        <button>Fight</button>
        or
        <button>Run</button>
      </div>
    </div>
  )
}

export default EventComponent;

import React from 'react';

const EventComponent = props => {

  let number = props.event.info.length
  let encounter;
  if (props.event.info.length > 1) {
    encounter = props.event.info.map( enemy => {
      enemy.name
    })
  } else {
    encounter = props.event.info[0].name
  }

  return(
    <div>
      {number} enemies have appeared: <br/>
      {encounter} <br/>
      What do you wish to do? <br/>
      -fight- or -run-
    </div>
  )
}

export default EventComponent;

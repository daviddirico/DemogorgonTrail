import React from 'react';

const EventOptions = props => {
  return(
    <div>
      <button>Search nearby town</button>
      <button>Wander the fields</button>
      <button onClick={props.handleSubmit}>Attempt nearby Cave</button>
    </div>
  )
}

export default EventOptions;

import React from 'react';

const SimplePopUp = props => {
  return(
    <div>
      You managed to escape but took some damage in doing so! <br/>
      <button onClick={props.simpleClick}>OK</button>
    </div>
  )
}

export default SimplePopUp;

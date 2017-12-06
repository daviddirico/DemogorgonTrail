import React from 'react'

const TextField = props => {

  return(
    <label className="signUpLabel">{props.label}
      <input
        name={props.name}
        onChange={props.handleChange}
        type="text"
        value={props.content}
      />
    </label>
  )
}

export default TextField

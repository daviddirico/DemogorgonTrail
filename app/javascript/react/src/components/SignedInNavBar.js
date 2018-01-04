import React from 'react';
import { Link } from 'react-router-dom'

const SignedInNavBar = props => {
  return(
    <div>
      <ul className="right">
        <Link to='/sign_out'>Sign Out</Link>
      </ul>
    </div>
  )
}

export default SignedInNavBar

import React from 'react';
import { Link } from 'react-router-dom'

const SignedOutNavBar = props => {
  return(
    <div>
      <ul className="right">
        <Link to='/sign_in'>Sign In</Link>
        <Link to='/sign_up'>Sign Up</Link>
      </ul>
    </div>
  )
}

export default SignedOutNavBar

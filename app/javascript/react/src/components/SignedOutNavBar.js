import React from 'react';
import { Link } from 'react-router-dom'

const SignedOutNavBar = props => {
  return(
    <div>
      <Link className="signLink small-6 columns" to='/sign_in'>Sign In</Link>
      <Link className="signLink small-6 columns" to='/sign_up'>Sign Up</Link>
    </div>
  )
}

export default SignedOutNavBar

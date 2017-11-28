import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/'>Story Mode</Link></li>
        <li><Link to='/highscores'>High Scores</Link></li>
        <li><Link to='/statistics'>Character Statistics</Link></li>
      </ul>
    </nav>
  </div>
)

export default Nav

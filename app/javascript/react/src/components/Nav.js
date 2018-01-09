import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
  <aside className="left-off-canvas-menu">
    <ul className="off-canvas-list">
      <li className="listItem"><Link to='/'>Home</Link></li>
      <li className="listItem"><Link to='/game'>Game Mode</Link></li>
      <li className="listItem"><Link to='/information'>Campaigns Info</Link></li>
      <li className="listItem"><Link to='/highscores'>High Scores</Link></li>
      <li className="listItem"><Link to='/profile'>Profile</Link></li>
    </ul>
  </aside>
)

export default Nav

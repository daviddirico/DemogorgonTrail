import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Main from './Main'

const App = props => {
  return(
    <div>
      <Nav />
      <Main />
    </div>
  )
}

export default App

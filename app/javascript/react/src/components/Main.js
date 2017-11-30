import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GameContainer from '../containers/GameContainer'
import HighScoresContainer from '../containers/HighScoresContainer'
import InformationContainer from '../containers/InformationContainer'
import ProfileContainer from '../containers/ProfileContainer'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = props => {
  return(
    <Switch>
      <Route exact path="/" component={GameContainer} />
      <Route exact path="/information" component={InformationContainer} />
      <Route exact path="/highscores" component={HighScoresContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  )
}

export default Main

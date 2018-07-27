import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GameContainer from '../containers/GameContainer'
import HighScoresContainer from '../containers/HighScoresContainer'
import ProfileContainer from '../containers/ProfileContainer'
import SignUpContainer from '../containers/SignUpContainer'
import SignInContainer from '../containers/SignInContainer'
import HomeContainer from '../containers/HomeContainer'

const Main = props => {

  return(
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/game" component={GameContainer} />
      <Route exact path="/highscores" component={HighScoresContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/sign_up" render={() => <SignUpContainer displayUser={props.displayUser} />} />
      <Route exact path="/sign_in" render={() => <SignInContainer displayUser={props.displayUser} />} />
      <Route exact path="/sign_out" component={HomeContainer} />
    </Switch>
  )
}

export default Main


// <Route exact path="/game" render={() => <GameContainer signedIn={props.signedIn} currentUser={props.currentUser} />} />

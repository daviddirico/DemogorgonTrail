import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HighScoresContainer from '../containers/HighScoresContainer'
import ProfileContainer from '../containers/ProfileContainer'
import SignUpContainer from '../containers/SignUpContainer'
import SignInContainer from '../containers/SignInContainer'
import HomeContainer from '../containers/HomeContainer'
import GameEngine from '../containers/GameEngine'

const Main = props => {

  return(
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      { props.signedIn &&
      <Route exact path="/game" render={() =>
        <GameEngine
          signedIn={props.signedIn}
          currentUser={props.currentUser}
          character={props.character}
          inventory={props.inventory}
          campaign={props.campaign}
        />}
      />
      }
      <Route exact path="/game" render={() => <SignInContainer displayUser={props.displayUser} />} />
      <Route exact path="/highscores" component={HighScoresContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/sign_up" render={() => <SignUpContainer displayUser={props.displayUser} />} />
      <Route exact path="/sign_in" render={() => <SignInContainer displayUser={props.displayUser} />} />
      <Route exact path="/sign_out" component={HomeContainer} />
    </Switch>
  )
}

export default Main

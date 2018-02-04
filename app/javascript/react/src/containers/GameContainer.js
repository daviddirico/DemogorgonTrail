import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import GameEngine from './GameEngine'


class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      currentUser: {}
    }
  }

  componentDidMount(){
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ signedIn: body.signed_in, currentUser: body.current_user})
    })
  }

  render() {

    let user_signed_in;
    if(!this.state.signedIn){
        user_signed_in = <p>You must be logged in to play the Demogorgon Trail</p>
    } else {
      user_signed_in = <GameEngine currentUser={this.state.currentUser} />
    }

    return(
      <section className="main-section">
        {user_signed_in}
      </section>
    )
  }
}

export default GameContainer

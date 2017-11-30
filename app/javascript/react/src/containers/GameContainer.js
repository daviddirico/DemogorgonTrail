import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {

    return(
      <section className="main-section">
        Hello From Game Container
      </section>
    )
  }
}

export default GameContainer

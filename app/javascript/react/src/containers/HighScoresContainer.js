import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class HighScoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {

    return(
      <section className="main-section">
        Hello From High Scores Container
      </section>
    )
  }
}

export default HighScoresContainer

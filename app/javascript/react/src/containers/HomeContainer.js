import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {

    return(
      <section className="main-section">
        <div className="introductoryText title">
          Welcome to The Demogorgon Trail!
          <br/>
        </div>

        <div className="introductoryText stoneTab">
          Beware! A force of darkness has entered the land of Mithralin causing torment to anyone who resists it, and even worse, King Balter has gone missing!  The only way to find him is to navigate the daunting trail of darkness, which the mighty Demogorgon has left in returning to whence it came.
          <br/>
          <br/>
          If you are brave enough to combat the dangers that lie in the wake of evil of these lands so that peace may be restored to these lands, then prepare to navigate the Demogorgon Trail...
        </div>
      </section>
    )
  }
}

export default HomeContainer

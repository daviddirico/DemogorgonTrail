import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {

    return(
      <section className="main-section">
        Hello From Profile Container
      </section>
    )
  }
}

export default ProfileContainer

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class InformationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {

    return(
      <section className="main-section">
        Hello From Information Container
      </section>
    )
  }
}

export default InformationContainer

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  ComponentDidMount() {
    fetch('api/v1/users', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
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
    .then(response => console.log(response))
    .then(json => {
      this.setState({ user: json });
    });
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

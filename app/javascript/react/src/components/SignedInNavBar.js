import React, {Component} from 'react';
import { Link } from 'react-router-dom'




class SignedInNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.endSession = this.endSession.bind(this)
  }


  handleSubmit(event) {
    event.preventDefault()
    this.endSession();
  }

  endSession() {
    fetch("log_out", {
      method: 'DELETE',
      body: JSON.stringify(this.props.currentUser),
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.status === 200) {
        console.log("success!")
      } else {
        console.log("failure!")
      }
    })

  }

  render() {
    let photo = this.props.currentUser.profile_photo.url

    return(
      <div>
        <div className="signLink small-6 columns">
          <img className="signImg" src={photo} />
        </div>
        <Link onClick={this.handleSubmit} className="signLink small-6 columns" to="/">Sign Out</Link>
      </div>
    )
  }

}

export default SignedInNavBar

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Main from '../components/Main'
import SignedOutNavBar from '../components/SignedOutNavBar'
import SignedInNavBar from '../components/SignedInNavBar'
import AdminNavBar from '../components/AdminNavBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      toggleClassName: "off-canvas-wrap docs-wrap main-nav",
      signedIn: false,
      currentUser: {}
    }
    this.handleIconClick = this.handleIconClick.bind(this)
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
    debugger;
    this.setState({ signedIn: body.signed_in, currentUser: body.current_user})
  })
}

  handleIconClick() {
    if (this.state.icon == false) {
      this.setState({
        icon: true,
        toggleClassName: "off-canvas-wrap docs-wrap main-nav move-right"
      })
    } else if (this.state.icon == true) {
      this.setState({
        icon: false,
        toggleClassName: "off-canvas-wrap docs-wrap main-nav"
      })
    }
  }

  render() {

    let user_signed_in;
    if(!this.state.signed_in){
        user_signed_in = <SignedOutNavBar/>
    } else {
      if(this.state.current_user.admin){
        user_signed_in = <AdminNavBar/>
      } else {
        user_signed_in = <SignedInNavBar/>
      }
    }

    return(
      <div className={this.state.toggleClassName} data-offcanvas>
        <div className="inner-wrap navigation-bar">
          <nav className="tab-bar">
            <section className="left-small">
              <a onClick={this.handleIconClick} className="left-off-canvas-toggle menu-icon"><span></span></a>
            </section>
            <section className="middle tab-bar-section">
              <h1 className="title">The Demogorgon Trail</h1>
            </section>
            {user_signed_in}
          </nav>
          <Nav />
          <Main />
        </div>
      </div>
    )
  }
}

export default App

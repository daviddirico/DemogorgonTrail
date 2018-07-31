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
      currentUser: {},
      character: false,
      campaign: false,
      inventory: false
    }
    this.handleIconClick = this.handleIconClick.bind(this)
    this.displayUser = this.displayUser.bind(this)
  }

  componentDidMount(){
    Promise.all([
      fetch('/api/v1/characters', {credentials: 'same-origin', method: 'GET', headers: { 'Content-Type':'application/json'}}),
      fetch('/api/v1/campaigns', {credentials: 'same-origin', method: 'GET', headers: { 'Content-Type':'application/json'}}),
      fetch('/api/v1/users', {credentials: 'same-origin', method: 'GET', headers: { 'Content-Type':'application/json'}})
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([body1, body2, body3]) => this.setState({
      character: body1.character,
      inventory: body1.inventory,
      campaign: body2.campaign,
      signedIn: body3.signed_in,
      currentUser: body3.current_user
    }));
  }

  displayUser() {
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
    if(!this.state.signedIn){
        user_signed_in = <SignedOutNavBar />
    } else {
      if(this.state.currentUser.role === "admin"){
        user_signed_in = <AdminNavBar />
      } else {
        user_signed_in = <SignedInNavBar
                            currentUser={this.state.currentUser}
                            displayUser={this.displayUser}
                          />
      }
    }

    return(
      <div className={this.state.toggleClassName} data-offcanvas>
        <div className="inner-wrap navigation-bar">
          <nav className="tab-bar">
            <section className="menuIcon small-3 columns">
              <a onClick={this.handleIconClick} className="left-off-canvas-toggle menu-icon"><span></span></a>
            </section>
            <section className="headerTitle small-6 columns">
              <h1 className="headerTitle">The Demogorgon Trail</h1>
            </section>
            <section className="userLogin small-3 columns">
              {user_signed_in}
            </section>
          </nav>
          <Nav />
          <Main
            signedIn={this.state.signedIn}
            currentUser={this.state.currentUser}
            displayUser={this.displayUser}
            character={this.state.character}
            inventory={this.state.inventory}
            campaign={this.state.campaign}
          />
        </div>
      </div>
    )
  }
}

export default App

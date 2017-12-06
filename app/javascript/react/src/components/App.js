import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      toggleClassName: "off-canvas-wrap docs-wrap main-nav"
    }
    this.handleIconClick = this.handleIconClick.bind(this)
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
            <ul className="right">
              <Link to='/sign_up'>Sign Up</Link>
            </ul>
          </nav>
          <Nav />
          <Main />
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">

            </a>
        </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu is-active">
        <Router>
            <div>
                <div className="navbar-start">
                    <Link className="navbar-item" to={`/home`}>Home</Link>
                    <Link className="navbar-item" to={`/about`}>About</Link>
                    <Link className="navbar-item" to={`/contact`}>Contact</Link>
                </div>
                <Route exact={true} path="/home" component={ Home } />

            </div>
        </Router>

  </div>
</nav>
    );
  }
}



export default App;

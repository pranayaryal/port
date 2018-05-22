import React, { Component } from 'react';
import Hero from './Hero'
import BlogHeader from './BlogHeader'
import Menu from './Menu'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tensorflow from './Tensorflow'
import Vim from './Vim'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Hero />
            <br />
            <div className="container">
              <div className="columns">
                <div className="column is-one-quarter">
                  <Menu />
                </div> 
                <div className="column">
                    <Route path="/tensorflow" component={Tensorflow}/>
                    <Route exact={true} path="/vim" component={Vim}/>
                </div>
              </div>
            </div>
          </div>
        </Router> 
    );
  }
}

export default App;

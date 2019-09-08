import React, { Component } from 'react';
import Hero from './components/Hero'
import Menu from './components/Menu'
import Stripe from './components/Stripe'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tensorflow from './Tensorflow'
import Vim from './components/Vim'
import Mort from './components/Mort'

const App = () => {
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
                    <Route exact={true} path="/mmr" component={Mort}/>
                    <Route exact={true} path="/vim" component={Vim}/>
                    <Route exact={true} path="/stripe" component={Stripe}/>
                </div>
              </div>
            </div>
          </div>
        </Router> 
    );
  }

export default App;

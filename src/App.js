import React, { Component } from 'react';
import Hero from './Hero'
import BlogHeader from './BlogHeader'
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <br />
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div> 
            <div className="column">
              This is for content
            </div>
       </div>

        </div>
             </div>
    );
  }
}

export default App;

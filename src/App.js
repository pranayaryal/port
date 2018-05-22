import React, { Component } from 'react';
import Hero from './Hero'
import BlogHeader from './BlogHeader'

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="columns">
          <div className="column is-one-quarter">
            <BlogHeader/>
          </div> 
          <div className="column">
            <section className="section">
              Your Blog goes here
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <BlogHeader/>
          </div> 
          <div className="column">
            <section className="section">
              Your Blog goes here and asdfasdfasdfasdfasdfasd asdfasdfasd asdfasdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdf asdfasdfasdfasdf asdfasdf
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

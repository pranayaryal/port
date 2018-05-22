import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Pranay</h1>
              <h2 className="subtitle">Software Developer & Data Scientist</h2>
            </div> 
          </div>

        </section>
        <section className="section">
            <div className="container">
              <p>I blog about data science</p>
            </div> 
        </section>
      </div>
    );
  }
}

export default App;

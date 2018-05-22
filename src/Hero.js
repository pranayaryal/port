import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
                <Link to="/">
                    <h1 className="title">Pranay Aryal</h1>
                    <h2 className="subtitle">Software Developer</h2>
                </Link>
            </div> 
          </div>

        </section>
      </div>
    );
  }
}

export default Hero;

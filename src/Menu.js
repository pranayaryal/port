
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside class="menu">
        <p class="menu-label">
            May 2018
        </p>
        <ul class="menu-list">
            <li>
                <Link to="/tensorflow">Tensorflow.js Tutorial</Link>
            </li>
            <li>
                <Link to="/components-vue">Components in Vue</Link>
            </li>
        </ul>
        <p class="menu-label">
            March 2017
        </p>
        <ul class="menu-list">
            <li>
                <Link to="/vim">Configuring Vim</Link>
            </li>
        </ul>
        <br /><br />
        <p class="menu-label">
            CODE SNIPPETS 
        </p>
        <ul class="menu-list">
            <li>
                <p>Python</p>
                <Link to="/vim">Mongo DB setup Ubuntu 16.04</Link>
            </li>
            <li>
                <p>MySQL</p>
                <Link to="/vim">Setting up DB for MySQL</Link>
            </li>
        </ul>
        
        </aside>
        
      </div>
    );
  }
}

export default Menu;

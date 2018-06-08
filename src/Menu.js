
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="menu">
        <p className="menu-label">
            May 2018
        </p>
        <ul class="menu-list">
            <li>
                <Link to="/mmr">Maternal Mortality in India</Link>
            </li>
        </ul>
        <p className="menu-label">
            March 2017
        </p>
        <ul className="menu-list">
            <li>
                <Link to="/vim">Configuring Vim</Link>
            </li>
        </ul>
        <br /><br />
        <p className="menu-label">
            CODE SNIPPETS 
        </p>
        <ul className="menu-list">
            <li>
                <p>Python</p>
            </li>
            <li>
                <p>MySQL</p>
            </li>
        </ul>
        
        </aside>
        
      </div>
    );
  }
}

export default Menu;

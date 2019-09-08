
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <div>
        <aside className="menu">
        <p className="menu-label">September 2019</p>
        <ul className="menu-list">
            <li>
                <Link to="/stripe">Configuring Stripe with React</Link>
            </li>
        </ul>
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
        
        </aside>
        
      </div>
    );
  }

export default Menu;

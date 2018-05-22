
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside class="menu">
        <p class="menu-label">
            May 2018
        </p>
        <ul class="menu-list">
            <li><a>Using Tensorflow.js</a></li>
            <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">
           April 2018 
        </p>
        <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
            <a>Manage Your Team</a>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage</a></li>
            <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">
            March 2018
        </p>
        <ul class="menu-list">
            <li><a>Is Marketing Similar To Medicine</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
        </ul>
        </aside>
        
      </div>
    );
  }
}

export default Menu;

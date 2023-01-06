import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex w-100">
            <NavLink className="nav-item nav-link" to="/">
              HookFlow
            </NavLink>
            {' | '}
            <NavLink className="nav-item nav-link" to="/useReducer">
              UseReducer
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

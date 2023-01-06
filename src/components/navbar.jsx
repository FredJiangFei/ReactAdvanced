import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <>
        <NavLink className="hover:bg-violet-500" to="/">
          HookFlow
        </NavLink>
        {' | '}
        <NavLink className="hover:bg-violet-500" to="/useReducer">
          UseReducer
        </NavLink>
      </>
    );
  }
}

export default NavBar;

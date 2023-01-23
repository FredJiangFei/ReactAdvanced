import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'hookFlow' },
  { to: '/useReducer', text: 'useReducer' },
  { to: '/useLayoutEffect', text: 'useLayoutEffect' },
  { to: '/useDebugValue', text: 'useDebugValue' },
  { to: '/useImperativeHandle', text: 'useImperativeHandle' },
  { to: '/contextModule', text: 'contextModule' },
  { to: '/compoundComponents', text: 'compoundComponents' },
];

class NavBar extends Component {
  render() {
    return (
      <>
        {routes.map((x) => (
          <NavLink key={x.text} className="hover:bg-violet-500" to={x.to}>
            {`${x.text} | `}
          </NavLink>
        ))}
      </>
    );
  }
}

export default NavBar;

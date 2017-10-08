import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Header({ handleToggleContact }) {
  return (
    <header id="header">
      <nav className="header-nav">
        <NavLink to="/about" className="header-tab" activeClassName="is-selected">About</NavLink>
        <NavLink to="/projects" className="header-tab" activeClassName="is-selected">Projects</NavLink>
        <NavLink to="/skills" className="header-tab" activeClassName="is-selected">Skills</NavLink>
        <button onClick={handleToggleContact} id="contact-me">Contact Me</button>
      </nav>
    </header>
  )
}

export default Header;

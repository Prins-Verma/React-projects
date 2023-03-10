import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// Using props as parameter in function
export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">

  {/* using props title from Apps.js */}
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
          <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/about">About</Link></li>
      </ul>
      
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
        <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

// Title is required which will be passed from App.js
Navbar.prototype = {
                    title : PropTypes.string.isRequired
}

// If title is not passed from App.js then "Set Title Here " will be displayed on 'Navbar title'
Navbar.defaultProps = {
                        title : 'Set Title Here'
};

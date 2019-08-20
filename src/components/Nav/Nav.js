import React from 'react'
import './Nav.css'

const nav = props => {
  return (
    <nav className="Nav">
      <h1
        className="logo"
        onClick={props.handleHomeClick}
      >SG</h1>
      <ul className="links">
        <li
          className="link"
          onClick={props.handleProfileClick}
        >Profile</li>
        <li className="link">Log out</li>
      </ul>
    </nav>
  )
}

export default nav

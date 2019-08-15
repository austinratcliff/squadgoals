import React from 'react'
import './Nav.css'

const nav = () => {
  return (
    <nav className="Nav">
      <h1 className="logo">SG</h1>
      <ul className="links">
        <li className="link">Profile</li>
        <li className="link">Log out</li>
      </ul>
    </nav>
  )
}

export default nav

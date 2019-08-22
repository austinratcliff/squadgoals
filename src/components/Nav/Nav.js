import React from 'react'
import styles from './Nav.module.css'

const nav = props => {
  return (
    <nav className={styles.Nav}>
      <h1
        className={styles.logo}
        onClick={props.handleHomeClick}
      >SG</h1>
      <ul className={styles.links}>
        <li
          className={styles.link}
          onClick={props.handleProfileClick}
        >Profile</li>
        <li className={styles.link}>Log out</li>
      </ul>
    </nav>
  )
}

export default nav

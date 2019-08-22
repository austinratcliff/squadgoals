import React from 'react'
import styles from './Profile.module.css'

const profile = props => {
  return (
    <div className={styles.Profile}>
      {/* TODO: Change to user image from API DB for production */}
      <div className={styles.image}></div>
      <h1 className={styles.name}>{props.user.name}</h1>
      <h2 className={styles.header}>Email</h2>
      <p className={styles.email}>{props.user.email}</p>
      <h2 className={styles.header}>Phone</h2>
      <p className={styles.phone}>{props.user.phone}</p>
      <button className={styles.edit}>Edit</button>
    </div>
  )
}

export default profile

import React from 'react'
import styles from './Member.module.css'

const member = props => {
  return (
    <div className={styles.Member}>
      <div className={styles.image}></div>
      <p className={styles.name}>{props.member.name}</p>
    </div>
  )
}

export default member

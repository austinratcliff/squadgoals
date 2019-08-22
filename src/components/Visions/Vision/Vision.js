import React from 'react'
import styles from './Vision.module.css'

const vision = props => {
  return (
    <div className={styles.Vision}>
      <p className={styles.timeframe}>In {props.vision.timeframe} years</p>
      <p className={styles.statement}>{props.vision.statement}</p>
    </div>
  )
}

export default vision

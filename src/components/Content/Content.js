import React from 'react'
import styles from './Content.module.css'

const content = () => {
  return (
    <div className={styles.Content}>
      <h1 className={styles.name}>SQUAD</h1>
      <h1 className={styles.name}>GOALS</h1>
      <p className={styles.description}>
        A social media web application created to help people find clarity with their vision and goals, as well as connect and collaborate with others to complete and/or expand on their goals.
      </p>
    </div>
  )
}

export default content

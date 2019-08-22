import React from 'react'
import styles from './PublicProject.module.css'

const publicProject = props => {
  return (
      <div className={styles.PublicProject}>
        <div className={styles.images}>
          {/* TODO: Change to user images from API DB for production */}
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
        <div className={styles.details}>
          <h1 className={styles.name}>{props.publicProject.name}</h1>
          <p className={styles.description}>{props.publicProject.description}</p>
        </div>
      </div>
  )
}

export default publicProject

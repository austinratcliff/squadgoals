import React from 'react'
import styles from './Project.module.css'

const project = props => {
  // TODO: Change to check logged in user id for production
  const member = props.project.members.map(member => {
    let name

    if (member.name !== "Austin Ratcliff") {
      name = member.name
    }

    return name
  })

  return (
    <div className={styles.Project}>
      <p className={styles.name}>{props.project.name}</p>
      <p className={styles.description}>{props.project.description}</p>
      <p className={styles.member}>with <span>{member}</span></p>
    </div>
  )
}

export default project

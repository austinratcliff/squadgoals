import React from 'react'
import Project from './Project/Project'
import styles from './Projects.module.css'

const projects = props => {
  const projects = props.projects.map(project => {
    return <Project key={project.id} project={project} />
  })

  return (
    <div className={styles.Projects}>
      <h1 className={styles.header}>Projects</h1>
      {/* TODO: Remove multiples for production */}
      {projects}
      {projects}
      {projects}
      {projects}
      {projects}
    </div>
  )
}

export default projects

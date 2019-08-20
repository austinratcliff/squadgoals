import React from 'react'
import Project from './Project/Project'
import './Projects.css'

const projects = props => {
  const projects = props.projects.map(project => {
    return <Project key={project.id} project={project} />
  })

  return (
    <div className="Projects">
      <h1 className="header">Projects</h1>
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

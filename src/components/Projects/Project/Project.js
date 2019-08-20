import React from 'react'
import './Project.css'

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
    <div className="Project">
      <p className="name">{props.project.name}</p>
      <p className="description">{props.project.description}</p>
      <p className="member">with <span>{member}</span></p>
    </div>
  )
}

export default project

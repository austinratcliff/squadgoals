import React from 'react'
import './PublicProject.css'

const publicProject = props => {
  return (
      <div className="PublicProject">
        <div className="images">
          {/* TODO: Change to user images from API DB for production */}
          <div className="first"></div>
          <div className="second"></div>
        </div>
        <div className="details">
          <h1 className="name">{props.publicProject.name}</h1>
          <p className="description">{props.publicProject.description}</p>
        </div>
      </div>
  )
}

export default publicProject

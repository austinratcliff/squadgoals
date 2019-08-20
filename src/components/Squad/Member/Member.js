import React from 'react'
import './Member.css'

const member = props => {
  return (
    <div className="Member">
      <div className="image"></div>
      <p className="name">{props.member.name}</p>
    </div>
  )
}

export default member

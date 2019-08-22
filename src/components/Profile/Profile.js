import React from 'react'
import './Profile.css'

const profile = props => {
  return (
    <div className="Profile">
      {/* TODO: Change to user image from API DB for production */}
      <div className="image"></div>
      <h1 className="name">{props.user.name}</h1>
      <h2 className="header">Email</h2>
      <p className="email">{props.user.email}</p>
      <h2 className="header">Phone</h2>
      <p className="phone">{props.user.phone}</p>
      <button className="edit">Edit</button>
    </div>
  )
}

export default profile

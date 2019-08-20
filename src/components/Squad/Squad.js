import React from 'react'
import Member from './Member/Member'
import './Squad.css'

const squad = props => {
  const squad = props.squad.map(member => {
    return <Member key={member.id} member={member} />
  })

  return (
    <div className="Squad">
      <h1 className="header">Squad</h1>
      {/* TODO: Remove multiples for production */}
      {squad}
      {squad}
      {squad}
      {squad}
      {squad}
    </div>
  )
}

export default squad

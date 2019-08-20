import React from 'react'
import Goal from './Goal/Goal'
import './Goals.css'

const goals = props => {
  const goals = props.goals.map(goal => {
    return <Goal key={goal.id} goal={goal} />
  })

  return (
    <div className="Goals">
      <h1 className="header">Goals</h1>
      {/* TODO: Remove multiples for production */}
      {goals}
      {goals}
      {goals}
      {goals}
      {goals}
    </div>
  )
}

export default goals

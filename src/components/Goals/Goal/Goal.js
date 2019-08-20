import React from 'react'
import './Goal.css'

const goal = props => {
  // TODO: Change to Moment.js for production
  const dateTime = new Date(props.goal.by_when)
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const year = dateTime.getFullYear()
  const date = month + '/' + day + '/' + year

  const tags = props.goal.tags.map(tag => {
    return <p key={tag.id} className="tag">{tag.name}</p>
  })

  return (
    <div className="Goal">
      <p className="category">{props.goal.category.name}</p>
      <div className="details">
        <p className="content">{props.goal.content}</p>
        <p className="byWhen">by {date}</p>
        {tags}
      </div>
    </div>
  )
}

export default goal

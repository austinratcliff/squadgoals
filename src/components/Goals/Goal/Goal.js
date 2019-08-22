import React from 'react'
import styles from './Goal.module.css'

const goal = props => {
  // TODO: Change to Moment.js for production
  const dateTime = new Date(props.goal.by_when)
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const year = dateTime.getFullYear()
  const date = month + '/' + day + '/' + year

  const tags = props.goal.tags.map(tag => {
    return <p key={tag.id} className={styles.tag}>{tag.name}</p>
  })

  return (
    <div className={styles.Goal}>
      <p className={styles.category}>{props.goal.category.name}</p>
      <div className={styles.details}>
        <p className={styles.content}>{props.goal.content}</p>
        <p className={styles.byWhen}>by {date}</p>
        {tags}
      </div>
    </div>
  )
}

export default goal

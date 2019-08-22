import React from 'react'
import Member from './Member/Member'
import styles from './Squad.module.css'

const squad = props => {
  const squad = props.squad.map(member => {
    return <Member key={member.id} member={member} />
  })

  return (
    <div className={styles.Squad}>
      <h1 className={styles.header}>Squad</h1>
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

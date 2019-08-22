import React from 'react'
import Visions from '../Visions/Visions'
import Goals from '../Goals/Goals'
import Projects from '../Projects/Projects'
import Squad from '../Squad/Squad'
import styles from './Dashboard.module.css'

const dashboard = props => {
  return (
    <div className={styles.Dashboard}>
      <Visions visions={props.visions} />
      <div className={styles.tabs}>
        <Goals goals={props.goals} />
        <Projects projects={props.projects} />
        <Squad squad={props.squad} />
      </div>
    </div>
  )
}

export default dashboard

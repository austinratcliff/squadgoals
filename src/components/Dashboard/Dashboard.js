import React from 'react'
import Visions from '../Visions/Visions'
import Goals from '../Goals/Goals'
import Projects from '../Projects/Projects'
import Squad from '../Squad/Squad'
import './Dashboard.css'

const dashboard = props => {
  return (
    <div className="Dashboard hide">
      <Visions visions={props.visions} />
      <div className="tabs">
        <Goals goals={props.goals} />
        <Projects projects={props.projects} />
        <Squad squad={props.squad} />
      </div>
    </div>
  )
}

export default dashboard

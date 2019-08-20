import React from 'react'
import './Vision.css'

const vision = props => {
  return (
    <div className="Vision">
      <p className="timeframe">In {props.vision.timeframe} years</p>
      <p className="statement">{props.vision.statement}</p>
    </div>
  )
}

export default vision

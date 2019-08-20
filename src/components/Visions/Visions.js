import React from 'react'
import Vision from './Vision/Vision'
import './Visions.css'

const visions = props => {
  const visions = props.visions.map(vision => {
    return <Vision key={vision.id} vision={vision} />
  })

  return (
    <div className="Visions">
      <h1 className="header">Vision</h1>
      {visions}
    </div>
  )
}

export default visions

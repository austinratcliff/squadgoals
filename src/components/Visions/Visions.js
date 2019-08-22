import React from 'react'
import Vision from './Vision/Vision'
import styles from './Visions.module.css'

const visions = props => {
  const visions = props.visions.map(vision => {
    return <Vision key={vision.id} vision={vision} />
  })

  return (
    <div className={styles.Visions}>
      <h1 className={styles.header}>Vision</h1>
      {visions}
    </div>
  )
}

export default visions

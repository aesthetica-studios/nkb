import React from 'react'
import './ValueCard.css'

const ValueCard = ({ icon, title, description, position }) => {
  return (
    <div className={`value-card ${position}`}>
      <div className="value-content">
        <div className="value-icon">
          {icon}
        </div>
        <div className="value-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ValueCard

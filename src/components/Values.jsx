import React from 'react'
import './Values.css'
import value from '../assets/smart value.webp'
import proven from '../assets/provenExp.webp'
import Industry from '../assets/industry.webp'
import service from '../assets/service.webp'

const Values = () => {
  const values = [
    {
      img: value,
      title: "Smart Value",
      description: "We Provide Smart Value Engineering Solutions That Optimize Cost Efficiency For Your Projects."
    },
    {
      img: proven,
      title: "Proven Expertise",
      description: "Decades Of Industry Experience With A Track Record Of Successful Project Deliveries."
    },
    {
      img: Industry,
      title: "Industrial Reliability",
      description: "Dependable Solutions Designed For Industrial Applications With Maximum Reliability."
    },
    {
      img: service,
      title: "24/7 Support",
      description: "Round-The-Clock Support To Ensure Your Projects Stay On Track And Meet Deadlines."
    }
  ]

  return (
    <section className="values section">
      <div className="container">
        <div className="values-header">
          <h2 className="section-title">Excellence. Integrity. Innovation</h2>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="values-card">
              <div className="values-icon">  <img src={value.img} alt={value.title} /> </div>
              <h3 className="values-title">{value.title}</h3>
              <p className="values-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values

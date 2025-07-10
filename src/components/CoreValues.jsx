import React from 'react'
import ValueCard from './ValueCard'
import './CoreValues.css'

const CoreValues = () => {
  const values = [
    {
      icon: '🤝',
      title: 'Trusted Expertise',
      description: 'Years Of Experience In Worldwide Project Implementations',
      position: 'left'
    },
    {
      icon: '🏗️',
      title: 'Quality Craftsmanship',
      description: 'Delivering Superior Quality And Reliability For Complete Satisfaction',
      position: 'right'
    },
    {
      icon: '🌱',
      title: 'Sustainable Solutions',
      description: 'Eco-Friendly Consultancy To Reduce Carbon Footprint And Energy Costs.',
      position: 'left'
    },
    {
      icon: '🎯',
      title: 'Personalized Service',
      description: 'Tailored Construction Solutions To Meet Unique Client Needs',
      position: 'right'
    }
  ]

  return (
    <section className="core-values-section">
      <div className="container">
        <h2>Core Values</h2>
        <div className="values-container">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              position={value.position}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues

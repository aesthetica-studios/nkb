import React from 'react'
import FeatureCard from './FeatureCard'
import './FeatureGrid.css'

const FeatureGrid = () => {
  const features = [
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Efficient Resource Utilization To Minimize Expenses.'
    },
    {
      icon: '⏰',
      title: 'Timely Delivery',
      description: 'Meeting Project Milestones And Deadlines Promptly.'
    },
    {
      icon: '🔧',
      title: 'Quality Standards',
      description: 'Upholding Rigorous Quality Control Measures Throughout.'
    },
    {
      icon: '📈',
      title: 'Value Engineering',
      description: 'Enhancing Value Without Compromising On Quality.'
    }
  ]

  return (
    <section className="feature-grid-section">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid

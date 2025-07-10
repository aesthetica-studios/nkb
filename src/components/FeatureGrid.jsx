import React from 'react'
import FeatureCard from './FeatureCard'
import './FeatureGrid.css'

import fc1 from '../assets/featureCard1.png'
import fc2 from '../assets/featureCard2.png'
import fc3 from '../assets/featureCard3.png'
import fc4 from '../assets/featureCard4.png'


const FeatureGrid = () => {
  const features = [
    {
      icon: fc1 ,
      title: 'Cost Optimization',
      description: 'Efficient Resource Utilization To Minimize Expenses.'
    },
    {
      icon: fc2 ,
      title: 'Timely Delivery',
      description: 'Meeting Project Milestones And Deadlines Promptly.'
    },
    {
      icon: fc3 ,
      title: 'Quality Standards',
      description: 'Upholding Rigorous Quality Control Measures Throughout.'
    },
    {
      icon: fc4 ,
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

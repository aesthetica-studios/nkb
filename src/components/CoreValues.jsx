import React from 'react'
import ValueCard from './ValueCard'
import './CoreValues.css'

import cv1 from '../assets/coreValue1.png'
import cv2 from '../assets/coreValue2.png'
import cv3 from '../assets/coreValue3.png'
import cv4 from '../assets/coreValue4.png'
import { MoveLeft } from 'lucide-react'

const CoreValues = () => {
  const values = [
    {
      icon: cv1,
      title: 'Trusted Expertise',
      description: 'Years Of Experience In Worldwide Project Implementations',
      position: 'left'
    },
    {
      icon: cv2,
      title: 'Quality Craftsmanship',
      description: 'Delivering Superior Quality And Reliability For Complete Satisfaction',
      position: 'right'
    },
    {
      icon: cv3,
      title: 'Sustainable Solutions',
      description: 'Eco-Friendly Consultancy To Reduce Carbon Footprint And Energy Costs.',
      position: 'left'
    },
    {
      icon: cv4,
      title: 'Personalized Service',
      description: 'Tailored Construction Solutions To Meet Unique Client Needs',
      position: 'right'
    }
  ]

  return (
    <section className="core-values-section">
      <div className="container" id="val-0">
        <h2 style={{ marginLeft: '2rem' }}>Core Values</h2>
        <div className="value-container">
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

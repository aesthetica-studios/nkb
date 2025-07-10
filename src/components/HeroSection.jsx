import React from 'react'
import './HeroSection.css'
import groupImage from '../assets/groupImage.png'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="containers">
        <div className="hero-content">
          <div className="hero-text flex-r">
            <div className='gaps'>
            <h1>Why Choose Us?</h1>
            <p>
              Cost Optimization, Adherence To Timelines, Meeting Quality Standards,
              And Value Engineering Across All Aspects Are Paramount. We Strive For
              Efficiency, Punctuality, And Excellence While Continually Enhancing Value
              In Every Project.
            </p>
            </div>
          </div>
          <div className="hero-image">
              <img src={groupImage} className='hero-img'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

import React from 'react'
import './HeroSection.css'
import groupImage from '../assets/groupImage.png'

const HeroSection = () => {
  return (
    <section className="heros-section">
      <div className="containers">
        <div className="heros-content">
          <div className="heros-text flex-r">
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
          <div className="heros-image">
              <img src={groupImage} className='heros-img'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

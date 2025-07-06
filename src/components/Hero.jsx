import React from 'react'
import './Hero.css'
import heroImg from '../assets/hero.webp'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Over 20+ Years Of Excellence In Project Consultancy</p>
            <h1 className="hero-title">
              Building The Future<br />
              With Excellence
            </h1>
            <p className="hero-description">
              NKB Inc. Approach To Engineering And Project Consultation Is 
              Anything But Typical. Because Client Problems Are Seldom 
              Typical Either.
            </p>
            <button className="btn btn-primary hero-btn">
              Explore More →
            </button>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">230+</div>
                <div className="stat-label">Satisfied Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">520+</div>
                <div className="stat-label">Completed Projects</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={heroImg} alt="Construction worker" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

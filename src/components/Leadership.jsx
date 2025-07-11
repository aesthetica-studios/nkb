import React from 'react'
import { useNavigate } from 'react-router-dom' 
import './Leadership.css'
import img from '../assets/image2.webp'
import yrs from '../assets/exp.webp'

const Leadership = () => {
  const navigate = useNavigate(); // ← ✅ useNavigate instance

  const handleLearnMore = () => {
    navigate('/about') // ← ✅ Navigate to the About page
  }
  return (
    <section className="leadership section">
      <div className="container">
        <div className="leadership-content">
          <div className="leadership-text">
            <h2 className="section-title">We Are Leader In Industrial Market</h2>
            <p className="section-subtitle">
              NKB Inc. Combines A Systematic Team Of Architects, Civil & MEP 
              Engineers And Skilled Site Specialists In Providing Products, Services 
              And Solutions That Are Innovative, Sustainable And Cost-
              Effective That Transcend Conventional Applications.
            </p>

          <div className='leadership-features-container'>
            <div className="leadership-features">
              <div className="feature-item">
                <span className="features-icon">✓</span>
                <span>Delivering Quality Construction Services</span>
              </div>
              <div className="feature-item">
                <span className="features-icon">✓</span>
                <span>Innovating & Providing Problem Solving</span>
              </div>
              <div className="feature-item">
                <span className="features-icon">✓</span>
                <span>Improving Value & Client Satisfaction</span>
              </div>
              <div className="feature-item">
                <span className="features-icon">✓</span>
                <span>Overcoming Unique Project Challenges</span>
              </div>
            </div>
            <img src={yrs} alt="20 Years Experience" className='exp-img'/>
          </div>

            <button className="btn btn-primary leadership-btn" onClick={handleLearnMore}>
              Learn More →
            </button>
          </div>

          <div className="leadership-image">
            {/* <div className="experience-badge">
              <div className="badge-number">20</div>
              <div className="badge-text">Years<br />Experience</div>
            </div> */}
            <img src={img} alt="Construction team" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

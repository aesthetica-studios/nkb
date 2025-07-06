import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Services.css'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Project Management",
      description: "Comprehensive project management services from initial concept to project completion. We ensure timely delivery and quality results.",
      image: card1
    },
    {
      title: "Construction Management",
      description: "Expert construction management ensuring quality, safety, and efficiency throughout the construction process.",
      image: card2
    },
    {
      title: "Quality Management",
      description: "Rigorous quality management processes to ensure all projects meet the highest standards and client expectations.",
      image: card3
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="services section">
      <div className="container">
        <div className="services-header">
          <div className='flex-column'>
          <h2 className="section-title">Our Expert Services</h2>
          <p className="section-subtitle" style={{ maxWidth: '900px' }}>
            From Initial Concept To Project Completion, We Deliver Tailored Engineering, Design Management, And 
            Industrial Services Focused On Maximizing Your Efficiency And Value.
          </p>
          </div>
          <button className="btn btn-primary view-all-btn">
            View All Services →
          </button>
        </div>

        <div className="services-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {services.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

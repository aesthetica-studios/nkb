import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Services.css'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'
import card4 from '../assets/card4.webp'
import card5 from '../assets/card3.webp'
import card6 from '../assets/card3.webp'
import card7 from '../assets/card7.webp'
import card8 from '../assets/card3.webp'
import card9 from '../assets/card9.webp'
import card10 from '../assets/card10.webp'
import card11 from '../assets/card11.webp'
const Services = () => {
  const navigate = useNavigate();
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
    },
    {
      title: "Budget and Monitoring",
      description: "Precise budgeting and monitoring to control costs, track progress, and ensure financial efficiency throughout the project lifecycle.",
      image: card4
    },
    {
      title: "QS and Contract",
      description: "Quantity surveying and contract management to ensure accurate cost estimation, tendering, and compliance with contractual obligations.",
      image: card5
    },
    {
      title: "Project Design Brief",
      description: "Innovative project design brief focusing on client vision, functional needs, and sustainable solutions for optimized construction outcomes.",
      image: card6
    },
    {
      title: "ISO Certification",
      description: "ISO-certified processes ensuring quality, safety, and efficiency across all project phases in compliance with international standards.",
      image: card7
    },
    {
      title: "Product Certification",
      description: "Product certification services ensuring compliance with industry standards, enhancing credibility, and meeting regulatory requirements.",
      image: card8
    },
    {
      title: "Documentation, Audit and Training",
      description: "Documentation, auditing, and training services to ensure compliance, transparency, and continuous professional development.",
      image: card9
    },
    {
      title: "Government Registration",
      description: "End-to-end assistance with government registrations, ensuring legal compliance and smooth project initiation.",
      image: card10
    },
    {
      title: "Business Development",
      description: "Strategic business development services focused on market expansion, client acquisition, and sustainable growth.",
      image: card11
    }
  ]

  const [currentGroup, setCurrentGroup] = useState(0)
  const cardsPerGroup = 3
  const totalGroups = Math.ceil(services.length / cardsPerGroup)

  const nextSlide = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups)
  }

  const prevSlide = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups)
  }

  
  const handleViewAll = () => {
    navigate('/services') // 👈 Navigate to the desired route
  }

  return (
    <section id="service" className="services section">
      <div className="container">
        <div className="services-header">
          <div className='flex-column'>
            <h2 className="section-title">Our Expert Services</h2>
            <p className="section-subtitle" style={{ maxWidth: '900px' }}>
              From Initial Concept To Project Completion, We Deliver Tailored Engineering, Design Management, And 
              Industrial Services Focused On Maximizing Your Efficiency And Value.
            </p>
          </div>
          <button className="btn btn-primary view-all-btn" onClick={handleViewAll}>
            View All Services →
          </button>
        </div>

        <div className="services-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className="services-grid smooth-slide" key={currentGroup}>

            {services
              .slice(
                currentGroup * cardsPerGroup,
                currentGroup * cardsPerGroup + cardsPerGroup
              )
              .map((service, index) => (
                <div 
                  key={index}
                  className="service-card"
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
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentGroup ? 'active' : ''}`}
              onClick={() => setCurrentGroup(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
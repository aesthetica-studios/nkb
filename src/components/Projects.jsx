import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'
import pattern1 from '../assets/pattern1.svg'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Port Check Greater Noida",
      category: "Plumbing Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Port Check Greater Noida",
      category: "Plumbing Service", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Port Check Greater Noida",
      category: "Plumbing Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: "/api/placeholder/400/300"
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="projects section" style={{ position: 'relative', overflow: 'hidden' }}>
  {/* Pattern overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${pattern1})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '600px auto', // 👈 increase size here
      backgroundPosition: 'center',
      opacity: 0.1,                  // 👈 control opacity here
      zIndex: 0,
      pointerEvents: 'none'
    }}
  ></div>

      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            Take A Look At Some Recent Projects We Have Completed For Our Valued Clients
          </p>
        </div>

        <div className="projects-carousel">
          <button className="carousel-btn prev-btn" onClick={prevProject}>
            <ChevronLeft size={24} />
          </button>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card ${index === currentProject ? 'active' : ''}`}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextProject}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>

        <div className="projects-footer">
          <button className="btn btn-secondary">
            Browse All Projects →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

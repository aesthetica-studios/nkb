import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Projects.css'

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
    <section className="projects section">
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

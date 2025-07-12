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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Drainage System Revamp",
      category: "Civil Infrastructure",
      description: "Ut elit tellus, luctus nec ullamcorper mattis.",
      image: "/api/placeholder/401/300"
    },
    {
      title: "Green Building Plan",
      category: "Eco Consultancy",
      description: "Pulvinar dapibus leo, sapient vehicula maximus.",
      image: "/api/placeholder/402/300"
    },
    {
      title: "Rooftop Rain Harvesting",
      category: "Water Solutions",
      description: "Aliquam vitae nulla, pulvinar non odio nec.",
      image: "/api/placeholder/403/300"
    },
    {
      title: "Industrial Piping Upgrade",
      category: "Mechanical",
      description: "Aenean tempor nisi non eros viverra rhoncus.",
      image: "/api/placeholder/404/300"
    },
    {
      title: "Solar Panel Integration",
      category: "Renewable Energy",
      description: "Vivamus efficitur sapien at arcu volutpat laoreet.",
      image: "/api/placeholder/405/300"
    },
    {
      title: "Basement Waterproofing",
      category: "Construction",
      description: "Nunc vel ipsum vitae libero porttitor consequat.",
      image: "/api/placeholder/406/300"
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

          <div className="projects-slider">
  {projects.map((project, index) => {
    // Determine the relative position
    const position = index === currentProject
      ? 'active'
      : index === (currentProject - 1 + projects.length) % projects.length
      ? 'prev'
      : index === (currentProject + 1) % projects.length
      ? 'next'
      : 'hidden';

    return (
      <div key={index} className={`project-card ${position}`}>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-category">{project.category}</p>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    );
  })}
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

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import pattern1 from '../assets/pattern1.svg';
import img1 from '../assets/project1.jpg';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
import img4 from '../assets/project4.jpg';
import img5 from '../assets/project5.png';
import img6 from '../assets/project6.png';

const Projects = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const projects = [
    { title: "Freudenberg Regional Corporate Center India Pvt. Ltd (FRCCI)", image: img1 },
    { title: "GIR Resort- Junagarh, Gujrat", image: img2 },
    { title: "Lilavati Hospital, GIFT City Ahmedabad, Gujrat", image: img3 },
    { title: "Adani Shantivan Township Mundra Ahmedabad, Gujrat", image: img4 },
    { title: "Zydus Lifesciences Ltd.", image: img5 },
    { title: "The Sovereign Thaltej, Ahmedabad (Gujrat)", image: img6 }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextProject(); // Swiped left
      } else {
        prevProject(); // Swiped right
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="projects section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${pattern1})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '600px auto',
          backgroundPosition: 'center',
          opacity: 0.1,
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

          <div
            className="projects-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slider-track">
            {projects.map((project, index) => {
              const position =
                index === currentProject
                  ? 'active'
                  : index === (currentProject - 1 + projects.length) % projects.length
                  ? 'prev'
                  : index === (currentProject + 1) % projects.length
                  ? 'next'
                  : 'hidden';

              return (
                <div
                  key={index}
                  className={`project-card ${position}`}
                  onClick={() => navigate('/projects')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
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
          <button className="btn btn-secondary" onClick={() => navigate('/projects')}>
            Browse All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

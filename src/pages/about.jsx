import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './about.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import End from '../components/End'
import womenInCap from '../assets/womenInCap.webp';
import stat1 from '../assets/stat1.svg';
import stat2 from '../assets/stat2.svg';
import stat3 from '../assets/stat3.svg';
import stat4 from '../assets/stat4.webp';
import abouthero from '../assets/abouthero.webp';
import ceo from '../assets/sudhirgupta.webp';
import ceo2 from '../assets/sushilsharma.webp';
import quote from '../assets/quote.webp';
import construction from '../assets/construction.webp'

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const scrollRef = useRef(null);
useEffect(() => {
  if (!isMobile || !scrollRef.current) return;

  const handleScroll = () => {
    const scrollX = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / cardWidth);
    setCurrentSlide(index);
  };

  const el = scrollRef.current;
  el.addEventListener('scroll', handleScroll);
  return () => el.removeEventListener('scroll', handleScroll);
}, [isMobile]);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  const leaders = [
    {
      name: "Mr. Sushil K. Sharma",
      title: "Partner In NKB Inc.",
      quote:
        "With innovation at heart and a drive for excellence, I believe in nurturing teams that build impactful solutions. True leadership in construction lies not just in managing structures, but in shaping spaces that inspire progress.",
      image: ceo2,
    },
    {
      name: "Mr. Sudhir Gupta",
      title: "Partner In NKB Inc.",
      quote:
        "Driven by purpose and fueled by collaboration, I strive to empower teams to turn bold ideas into lasting impact. Leadership, to me, is about building more than projects — it’s about creating environments where people and possibilities grow together.",
      image: ceo,
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % leaders.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-App">
      <Header />

      <main className="about-main-content">
        <div className="about-container">
          <section className="about-about-section">
            <div className="about-logo-card">
              <img className='about-img' src={abouthero} />
            </div>
            <div className="about-about-content">
              <h2>About NKB Inc.</h2>
              <p className="about-about-text">
                At NKB Inc., we've proudly emerged as a leading force in industrial
                engineering and project consultation for over 20 years.
              </p>
              <p className="about-vision-text">Our journey began with a clear vision:</p>
              <p className="about-about-text">
                To redefine industry standards by approaching every challenge with
                innovative, beyond-ordinary thinking. We are a synergistic team of Architects,
                Civil & MEP Engineers, and Auditors, driven by a shared passion for delivering
                impactful, bespoke solutions that consistently exceed client expectations and
                contribute to a better-built environment.
              </p>
            </div>
          </section>
        </div>
      </main>

      <section className="about-stats-section">
        <div className="about-container">
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="about-stat-icon"><img src={stat1} alt="Years of Experience" /></div>
              <div className="about-stat-text">
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">Years Of Experience</div>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon"><img src={stat2} alt="Team Members" /></div>
              <div className="about-stat-text">
                <div className="about-stat-number">15</div>
                <div className="about-stat-label">Team Members</div>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon"><img src={stat3} alt="Satisfied Clients" /></div>
              <div className="about-stat-text">
                <div className="about-stat-number">232</div>
                <div className="about-stat-label">Satisfied Clients</div>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon"><img src={stat4} alt="Projects Done" /></div>
              <div className="about-stat-text">
                <div className="about-stat-number">521</div>
                <div className="about-stat-label">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-values-content">
            <div className="about-values-text">
              <h2>Values are like a Compass that Guides Our Ship</h2>
              <ul className="about-values-list">
                <li className="about-value-item">
                  <div className="about-value-number">1</div>
                  <div className="about-value-content">
                    <h3>Golden Rule</h3>
                    <p>Honesty Is Our Foundation Of Deep, Reliable And Trustworthy Relationships. We Believe In Transparency And Accountability In All Our Dealings.</p>
                  </div>
                </li>
                <li className="about-value-item">
                  <div className="about-value-number">2</div>
                  <div className="about-value-content">
                    <h3>Family Oriented</h3>
                    <p>Family Oriented: Our Clients And Partners Are Family. We Prioritize Long-Term Relationships Built On Trust And Mutual Respect.</p>
                  </div>
                </li>
                <li className="about-value-item">
                  <div className="about-value-number">3</div>
                  <div className="about-value-content">
                    <h3>Relentless Pursuit Of Improvement</h3>
                    <p>Excellence And Continuous Work Ethic, Constant Improvement Is Our Competitive Edge. We Continuously Strive For Excellence In Everything We Do.</p>
                  </div>
                </li>
                <li className="about-value-item">
                  <div className="about-value-number">4</div>
                  <div className="about-value-content">
                    <h3>Stewardship</h3>
                    <p>We Take Care Of Others And The Environment. We Are Committed To Sustainable Practices That Benefit Our Clients, Our Projects And Our Community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-values-image">
              <img src={womenInCap} alt="Professional woman in construction setting" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Arrows */}
      <section className="about-leadership-section">
        <div className="about-container">
          <div className="about-leadership-content">
            <h2>Meet Our Leadership</h2>
            <div className="about-leadership-slider">

              <button className="carousel-btn prev-btn" onClick={handlePrev}>
                <ChevronLeft size={24} />
              </button>

              {isMobile ? (
  <div className="about-leader-scroll-track" ref={scrollRef}>
    {leaders.map((leader, index) => (
      <div className="about-leader-card-wrapper" key={index}>
        <img src={leader.image} alt={leader.name} className="about-leader-image" />
        <div className="about-quote-icon"><img src={quote} /></div>
        <div className="about-leader-card">
          <div className="about-leader-info">
            <p className="about-leader-quote">{leader.quote}</p>
            <h3 className="about-leader-name">{leader.name}</h3>
            <p className="about-leader-title">{leader.title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="leader-img">
    <img src={leaders[currentSlide].image} alt={leaders[currentSlide].name} className="about-leader-image" />
    <div>
      <div className="about-quote-icon"><img src={quote} /></div>
      <div className="about-leader-card">
        <div className="about-leader-info">
          <p className="about-leader-quote">{leaders[currentSlide].quote}</p>
          <h3 className="about-leader-name">{leaders[currentSlide].name}</h3>
          <p className="about-leader-title">{leaders[currentSlide].title}</p>
        </div>
      </div>
    </div>
  </div>
)}


              <button className="carousel-btn next-btn" onClick={handleNext}>
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="about-slider-dots">
              {leaders.map((_, index) => (
                <span
                  key={index}
                  className={`about-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="about-management-section">
        <div className="about-container">
          <div className="about-management-content">
            <div className="about-management-image">
              <img src={construction} alt="Construction management" />
            </div>
            <div className="about-management-text">
              <h2>Management Mantra</h2>
              <p className="about-management-description">
                Persistent Pursuit Of Excellence, Innovation, And Efficiency In
                Delivering Quality Tasks Within Budget And Time, Honest, Fair, And
                Trustworthy With Uncompromising Integrity, Embracing Teamwork For
                Achieving Common Goals Transcending Cultural Barriers
              </p>
              <ul className="about-management-points">
                <li>Performance-Pursuing Excellence, Innovation, And Efficiency</li>
                <li>Ethics-Honest And Fair With Uncompromising Integrity</li>
                <li>Passion-Trustworthy With 'Can Do' Attitude</li>
                <li>Team Work-We Prioritize Teamwork, DREAMWOrk Is Essential</li>
                <li>People-Cultural Diversity Unites, Achieving Common Goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <End />
    </div>
  );
}

export default About;

import React from 'react'
import styles from './about.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import End from '../components/End'
import womenInCap from '../assets/womenInCap.png';
import stat1 from '../assets/stat1.svg';
import stat2 from '../assets/stat2.svg';
import stat3 from '../assets/stat3.svg';
import stat4 from '../assets/stat4.png';
import abouthero from '../assets/abouthero.png';
import ceo from '../assets/sudhirgupta.png';
import quote from '../assets/quote.png';
import construction from '../assets/construction.png' 
// import stat1 from '../assets/stat1.svg';
// import stat2 from '../assets/stat2.svg';
// import stat3 from '../assets/stat3.svg';
// import stat4 from '../assets/stat4.svg';

function About() {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
    <div className="about-App">
      {/* Header */}
        <Header />

      {/* Main Content */}
        <main className="about-main-content">
        <div className="about-container">
            <section className="about-about-section">
            <div className="about-logo-card">
                <img className='about-img' src={abouthero}/>
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

      {/* Stats Section */}
        <section className="about-stats-section">
        <div className="about-container">
            <div className="about-stats-grid">
            <div className="about-stat-item">
                <img classname = "images" src={stat1} />
                <div>
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">Years Of Experience</div>
                </div>
            </div>
            <div className="about-stat-item">
                <img classname = "images" src={stat2} />
                <div>
                <div className="about-stat-number">15</div>
                <div className="about-stat-label">Team Members</div>
                </div>
            </div>
            <div className="about-stat-item">
                <img classname = "images" src={stat3} />
                <div>
                <div className="about-stat-number">232</div>
                <div className="about-stat-label">Satisfied Clients</div>
                </div>
            </div>
            <div className="about-stat-item">
                <img classname = "images" src={stat4} />
                <div>
                <div className="about-stat-number">521</div>
                <div className="about-stat-label">Projects Done</div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Values Section */}
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
                    <p>Stewardship: We Take Care Of Others And The Environment. We Are Committed To Sustainable Practices That Benefit Our Clients, Our Projects And Our Community.</p>
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

      {/* Leadership Section */}
        <section className="about-leadership-section">
        <div className="about-container">
            <div className="about-leadership-content">
            <h2>Meet Our Leadership</h2>
            <div className="about-leadership-slider">
                <div className='leader-img'>
                <img src={ceo} alt="Mr. Sudhir Gupta" className="about-leader-image" />
                <div>
                <div className="about-quote-icon"><img src={quote}/></div>
                <div className="about-leader-card">

                <div className="about-leader-info">
                    {/* <div className="about-quote-icon"><img src={quote}/></div> */}
                    <p className="about-leader-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sit et massa mi. Aliquam ut hendrerit urna. 
                    Pellentesque sit amet sapien rhoncus, mattis ligula 
                    consectetur, ultrices mauris. Maecenas vitae mauris 
                    tellus. Nullam quis imperdiet augue.
                    </p>
                    <h3 className="about-leader-name">Mr. Sudhir Gupta</h3>
                    <p className="about-leader-title">Partner In NKB Inc.</p>
                </div>
                </div>
                </div>
                </div>
                {/* <div className="about-slider-nav">
                <button className="about-nav-btn"></button>
                <button className="about-nav-btn"></button>
                </div> */}
                <div className="about-slider-dots">
                <span className="about-dot active"></span>
                <span className="about-dot"></span>
                </div>
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

        {/* Footer Section */}
        <Footer />
        <End />

    </div>
    )
}

export default About;

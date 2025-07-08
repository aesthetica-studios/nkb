import React from 'react'
import './Footer.css'
import arrow from "../assets/arrow.webp"
import map from "../assets/map.png"
import email from "../assets/email.png"
import phone from "../assets/call.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer_section_nkb">
              <div className="footer-logo">
                <span className="logo-icon">
                  <img src="logo\Group 98.svg" alt="NKB Logo" className="logo-img" />
                </span>
              </div>
              <p className="footer-description">
              NKB Inc. Combines A Systematic Team Of Architects, Civil & MEP Engineers And Skilled Site Specialists In Providing Products, Services And Solutions.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <img src={map} className="contact-icon"/>
                <span>d-242, second floor, sector 10, noida-201301</span>
              </div>
              <div className="contact-item">
                <img src={phone} className="contact-icon"/>
                <span>+91-7834568790<br />+91-7834568790</span>
              </div>
              <div className="contact-item">
                <img src={email} className="contact-icon"/>
                <span><a href="mailto:admin@nkbinc.com" className="mail-link">admin@nkbinc.com</a><br />
                      <a href="mailto:account@nkbinc.com" className="mail-link">account@nkbinc.com</a></span>
              </div>
              </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Business Hours</h3>
            <div className="business-hours">
              <div className="hours-item">
                <span className='bold'>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-item">
                <span className='bold'>Saturday</span>
                <span>9:00 AM - 12:00 PM</span>
              </div>
              <div className="hours-item">
                <span className='bold'>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="quick-links">
              {/* <span className="quick-icon">📞</span> */}
              {/* <span><a href="#home">Home</a></span> */}
              <a href="#about" className='flex'><img src={arrow}/> About Us</a>
              <a href="#services" className='flex'><img src={arrow}/> Our Services</a>
              <a href="#projects" className='flex'><img src={arrow}/> Projects</a>
              <a href="#contact" className='flex'><img src={arrow}/> Contact Us</a>
              <a href="#terms" className='flex'><img src={arrow}/> Terms & Conditions</a>
              
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="logo\Group 98.svg" alt="NKB Logo" className="logo-img" ></img>

          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#why" className="nav-link">Why Us?</a>
          </nav>

          <a href="#contact" className="btn btn-primary contact-btn">Contact Us</a>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

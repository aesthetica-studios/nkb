import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="assets\Group 98.svg" alt="NKB Logo" className="logo-img" ></img>

          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>

            <NavLink to="/about" 
              end 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About Us
            </NavLink>

            <NavLink to="/Projects" 
              end 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Projects
            </NavLink>

            <NavLink to="/services" 
              end 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>

            <NavLink to="/us" 
              end 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Why Us?
            </NavLink>
            <NavLink to="/contact" className="btn btn-primary contact-btn">Contact Us</NavLink>
          </nav>

          


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

import React from "react"
import './contact.css'
import call from '../assets/call.png'
import email from '../assets/email.png'
import contactHero from '../assets/contactHero.png'

const Contact = () => {
    return (
    <>
        <div className="container contact-hero-wrapper">
            <div>
                <h1>We're Here to Help!</h1>
                <p>Whether you have a project inquiry, require industrial support, or simply wish to learn more about our engineering and consultation services, our team is ready to assist you. Please reach out to us using the details below</p>
            </div>
            <div className="contact-link-wrapper">
                <div className="contact-link">
                    <h2>Reach Us Directly</h2>
                    <div className="xyz">
                        <div className="contact-link-card">
                            <img src={call} className="contact-icons"/>
                                <h3>Call us</h3>
                            <span>
                                <a href="tel:+917838498700" className="phone-link">+91 7838498700</a><br/>
                                <a href="tel:+91935494409" className="phone-link">+91 935494409</a>
                            </span>
                        </div>

                        <div className="contact-link-card">
                            <img src={email} className="contact-icons"/>
                                <h3>Mail Us</h3>
                            <span>
                                <a href="mailto:admin@nkbinc.com" className="mail-link">admin@nkbinc.com</a><br />
                                <a href="mailto:account@nkbinc.com" className="mail-link">account@nkbinc.com</a>
                            </span>
                        </div>
                    </div>
                </div>
                <img src={contactHero} className="contact-hero-img"/>
            </div>
        </div>
    </>
    )
}

export default Contact
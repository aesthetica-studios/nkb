import React from 'react'
import './map.css'

const Map = () => {
const handleLocationClick = () => {
    const address = "D-242, Second Floor, Sector 10, Noida-201301, Uttar Pradesh, India"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
}

return (
    <section className="map-section">
    <div className="container">
        <div className="map-content">
        <div className="map-address-info">
            <h2 className="map-section-title">Visit Our Office</h2>
            <div className="map-address-details">
            <h3 className="map-address-label">Address:</h3>
            <p className="map-address-text">
                D-242, Second Floor, Sector 10, Noida-201301,<br />
                Uttar Pradesh, India.
            </p>
            <button className="btn btn-primary" onClick={handleLocationClick}>
                Check Out Location!
            </button>
            </div>
        </div>
        
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.944375201475!2d72.5708307!3d23.062500800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b428106d2b%3A0xdb2b9baec24eef06!2sNKB-Skill%20Build%20India%20Centre%20(Research%2CIELTS%2CEnglish%20%26%20PD%20Training)!5e0!3m2!1sen!2sin!4v1752263413611!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NKB Skill Build India Centre"
                className="google-map"
            />

        </div>
        </div>
    </div>
    </section>
)
}

export default Map

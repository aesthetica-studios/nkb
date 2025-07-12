import React from 'react'
import './map.css'

const Map = () => {
const handleLocationClick = () => {
  const destination = "28.5921111,77.3336389"; // Your office coordinates
  const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
  window.open(url, "_blank");
};
return (
    <section className="map-section">
    <div className="container">
        <div className="map-content">
        <div className="map-address-info">
            <h2 className="map-section-title">Visit Our Office</h2>
            <div className="map-address-details">
            <h3 className="map-address-label">Address:</h3>
            <p className="map-address-text">
                D-206, Second Floor, Sector 10, Noida-201301,<br />
                Uttar Pradesh, India.
            </p>
            <button className="btn btn-primary" onClick={handleLocationClick}>
                Check Out Location!
            </button>
            </div>
        </div>
        
        <div className="map-container">
           <iframe
  title="NKB Office Location"
  src="https://www.google.com/maps?q=28.5921111,77.3336389&z=17&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="google-map"
/>

        </div>
        </div>
    </div>
    </section>
)
}

export default Map

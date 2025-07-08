import React from 'react';
import './ServiceBox.css';

const ServiceBox = ({ title, points, image, reverse }) => {
  return (
    <div className={`service-box ${reverse ? 'reverse' : ''}`}>
      <div className="service-text">
        <h2>{title}</h2>
        <ul>
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ServiceBox;

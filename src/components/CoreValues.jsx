import React from 'react';
import ValueCard from './ValueCard';
import './CoreValues.css';

import cv1 from '../assets/coreValue1.png';
import cv2 from '../assets/coreValue2.png';
import cv3 from '../assets/coreValue3.png';
import cv4 from '../assets/coreValue4.png';

const CoreValues = () => {
  const values = [
    {
      icon: cv1,
      title: 'Trusted Expertise',
      description: 'Years of experience in worldwide project implementations.',
    },
    {
      icon: cv2,
      title: 'Quality Craftsmanship',
      description: 'Delivering superior quality and reliability for complete satisfaction.',
    },
    {
      icon: cv3,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly consultancy to reduce carbon footprint and energy costs.',
    },
    {
      icon: cv4,
      title: 'Personalized Service',
      description: 'Tailored construction solutions to meet unique client needs.',
    }
  ];

  return (
    <section className="core-values-section">
      <div className="container">
        <h2 className="core-values-title">Core Values</h2>
        <div className="value-container">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

import React from 'react';
import ServiceBox from '../components/ServiceBox';
import Header from '../components/Header'
import Footer from '../components/Footer'
import End from '../components/End'

import img1 from '../assets/card1.webp';
import img2 from '../assets/card1.webp';
import img3 from '../assets/card1.webp';
import img4 from '../assets/card1.webp';
import img5 from '../assets/card1.webp';

const services = [
  {
    title: "Construction Management Services",
    image: img1,
    points: [
      "Mobilization Plan With Infrastructure Planning",
      "Preparation Of Weekly Plans",
      "Review On Running & Final Bills",
      "Cost Monitoring On Regular Basis",
      "Process Audits As Per Manual"
    ]
  },
  {
    title: "Quality Management Services",
    image: img2,
    points: [
      "Adherence To Standards At Every Stage",
      "Compliance With Regulations",
      "Assessment Throughout Project Lifecycle",
      "Protocols For Client Satisfaction"
    ],
    reverse: true
  },
  {
    title: "Budget & Monitoring Services",
    image: img3,
    points: [
      "Excellence In Time, Budget, and Quality",
      "Trust With Integrity & Teamwork",
      "Performance + Ethics = Great Results",
      "Diversity Unites, Achieving Goals Together"
    ]
  },
  {
    title: "QS & Contract Services",
    image: img4,
    points: [
      "Evaluation Based On GFC Drawings",
      "Vendor Quotes & Contract Strategy",
      "Tender Document Preparation",
      "Kick-off Meetings & Vendor Selection"
    ],
    reverse: true
  },
  {
    title: "Project Design Services",
    image: img5,
    points: [
      "Feasibility, MEP & Structural Coordination",
      "Design Without Compromising Quality",
      "Maximizing Financial Returns",
      "Cost-Effective + Client-Aligned Options"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div style={{ background: '#0e1a2b', padding: '60px 0' }}>
    <Header/>
      {services.map((s, i) => (
        <ServiceBox key={i} {...s} />
      ))}
    <Footer/>
    <End/>
    </div>
  );
};

export default ServicesPage;
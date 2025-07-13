import React from 'react';
import ServiceBox from '../components/ServiceBox';
import Header from '../components/Header'
import Footer from '../components/Footer'
import End from '../components/End'
import pattern1 from '../assets/pattern1.svg'
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import img7 from '../assets/img7.webp';
import img8 from '../assets/img8.webp';
import img9 from '../assets/img9.webp';
import img10 from '../assets/img10.webp';
import img11 from '../assets/img11.webp';

import bg from '../assets/servicesBg.png';

const services = [
  {
    title: "Project Management Services",
    image: img1,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

      "Efficient distribution of manpower, materials, and equipment for optimized project execution.",

      "Proactive identification and mitigation of potential risks to ensure smooth progress.",

      "Facilitating clear communication and collaboration among all parties involved.",

      "Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: true
  },
  {
    title: "Construction Management Services",
    image: img2,
    points: [
      "Mobilization plan with infrastructure planning.",

"Preparation of monthly / weekly planning based on Master Bar Chart and available scope of work.",

"Review of Running & Final bills along with material reconciliation , settlement of extra claims if any.",

"Cost Monitoring at regular basis with preparation of cost to complete statements.",

"To carry out Process Audits as defined in company manual."
    ],
    reverse: false
  },
  {
    title: "Quality Management Services",
    image: img3,
    points: [
      "Ensuring compliance with industry regulations and project specifications.",

"Conducting thorough assessments at every stage of the project lifecycle.",

"Implementing protocols to maintain consistent quality standards.",

"Iteratively refining processes to enhance quality and efficiency.",

 "Prioritizing client expectations and feedback to deliver exceptional results."
    ],
    reverse: true
  },
  {
    title: "Budget & Monitoring Services",
    image: img4,
    points: [
      "Performance-Pursuing excellence, innovation, and efficiency.",

"Ethics-Honest and fair with uncompromising integrity.",

"Passion-Trustworthy with 'Can Do' attitude .",

"Team Work-WE prioritize teamwork; DREAMWORK is essential.",

"People-Cultural diversity unites, achieving common goals"
    ],
    reverse: false
  },
  {
    title: "QS & Contract Services",
    image: img5,
    points: [
      "Quantification based on GFC ( Good for construction ) drawings.",

"Evaluation of vendors as per contract strategy.",

"Working for tender documents as per contract conditions.",

"Analysis of received quotes ,tender negotiations for award of contracts followed by kick-off meeting with selected vendor.",

"Contract Administration."
    ],
    reverse: true
  },
  {
    title: "Project Design Services",
    image: img6,
    points: [
      "Conduct feasibility studies and finalize design brief, considering MEP requirements.",

"Work with designers, agents, and fund raisers to maximize financial returns while maintaining quality.",

"During design development, explore cost-effective options without altering design intent.",

"Evaluate costing options to align with project's financial goals.",

"Ensure that value engineering efforts do not compromise the project's overall quality standards."
    ],
    reverse: false
  },
  {
    title: "ISO Certifications",
    image: img7,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

"Efficient distribution of manpower, materials, and equipment for optimized project execution.",

"Proactive identification and mitigation of potential risks to ensure smooth progress.",

"Facilitating clear communication and collaboration among all parties involved.",

"Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: true
  },
  {
    title: "Product Certification",
    image: img8,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

"Efficient distribution of manpower, materials, and equipment for optimized project execution.",

"Proactive identification and mitigation of potential risks to ensure smooth progress.",

"Facilitating clear communication and collaboration among all parties involved.",
"Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: false
  },
  {
    title: "Documentation, Audit and Training",
    image: img9,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

"Efficient distribution of manpower, materials, and equipment for optimized project execution.",

"Proactive identification and mitigation of potential risks to ensure smooth progress.",

"Facilitating clear communication and collaboration among all parties involved.",

"Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: true
  },
  {
    title: "Government Registration Services",
    image: img10,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

"Efficient distribution of manpower, materials, and equipment for optimized project execution.",

"Proactive identification and mitigation of potential risks to ensure smooth progress.",

"Facilitating clear communication and collaboration among all parties involved.",

"Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: false
  },
  {
    title: "Business Development",
    image: img11,
    points: [
      "Detailed strategizing to outline project objectives, milestones, and timelines.",

"Efficient distribution of manpower, materials, and equipment for optimized project execution.",

"Proactive identification and mitigation of potential risks to ensure smooth progress.",

"Facilitating clear communication and collaboration among all parties involved.",

"Implementing rigorous standards to uphold construction quality and safety throughout the project lifecycle."
    ],
    reverse: true
  }
];

const ServicesPage = () => {
  return (
    
    <div style={{ backgroundColor: '#18222D', position: 'relative', overflow: 'hidden', padding: '60px 0 0 0' }}>
  {/* Background pattern */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${pattern1})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '600px auto',
      backgroundPosition: 'center',
      opacity: 0.15,
      zIndex: 0,
      pointerEvents: 'none'
    }}
  ></div>

  {/* Content */}
  <div style={{ position: 'relative', zIndex: 1 }}>
    <Header />
    
    <div className='container sp-head' style={{
 backgroundColor: '#0e1f31ff',
    padding: '50px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    maxWidth: '2000px',
    margin: '0 auto 50px auto',
    position: 'relative',
    zIndex: 2
}}>
      <h1>Our Comprehensive Services</h1>
      <p>From initial concept to successful completion, NKB Inc. delivers expert consultation, precise design management, and reliable industrial support tailored to your needs.</p>
    </div>

    {services.map((s, i) => (
      <ServiceBox key={i} {...s} reverse={i % 2 !== 0} {...s}/>
    ))}

    <Footer />
    <End />
  </div>
</div>

    
  );
};

export default ServicesPage;
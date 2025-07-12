import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import End from '../components/End';

import img1 from '../assets/as_proj_1.jpg';
import img2 from '../assets/as_proj_2.png';
import img3 from '../assets/as_proj_3.png';
import img4 from '../assets/as_proj_4.png';
import img5 from '../assets/as_proj_5.png';
import img6 from '../assets/as_proj_6.png';
import img7 from '../assets/as_proj_7.png';
import img8 from '../assets/as_proj_8.png';
import img9 from '../assets/as_proj_9.png';
import img10 from '../assets/as_proj_10.png';
import img11 from '../assets/as_proj_11.png';
import img12 from '../assets/as_proj_12.jpg';
import img13 from '../assets/as_proj_13.jpg';
import img14 from '../assets/as_proj_14.jpg';
import img15 from '../assets/as_proj_15.jpg';
import img16 from '../assets/as_proj_16.jpg';

// Add more images as needed

import './ProjectPage.css'; // Create and style this file

const projects = [
{
    title: "Individual Capacity with Wave Infratech",
    image: img1,
    description: [
    "CLIENT: Wave Executive Floors",
    "LOCATION: Wave City, NH-24, Ghaziabad",
    "BUILT-UP AREA: 5,00,000 SQFT",
    "STATUS: Completed in 2018"
  ]
},
{
    title: "Individual Capacity with Wave Infratech",
    image: img2,
    description: [
    "CLIENT			: Dream Home Project",
"LOCATION		: Wave City NH-24, Ghaziabad",
"BUILTUP AREA		: 24,00,000 SQFT AREA",
"STATUS			: Completed in 2019"
  ]},
{
    title: "Individual Capacity with Shapoorji Pallonji",
    image: img3,
description: [
    "CLIENT			: ITPO Pragati Maidan",
"LOCATION		: New Delhi",
"BUILTUP AREA		: 40,00,000 SQFT AREA",
"STATUS			: In Progress"
  ]},
{
    title: "Individual Capacity with Akasva Infra",
    image: img4,
description: [
    "CLIENT			: Adani (AEL) Township, C.G.",
"LOCATION		: Gumga, Ambikapur, C.G.",
"BUILTUP AREA		: 1,50,000 SQFT AREA",
"STATUS			: Completed"

  ]},
{
    title: "Individual Capacity with JMC",
    image: img5,
description: [
    "CLIENT			: JP Greens  Star Court",
"LOCATION		: Pari Chock Greater Noida",
"BUILTUP AREA		: 11,85,000 SQFT AREA",
"STATUS			: Completed in 2009"

  ]},
{
    title: "Individual Capacity with Solutions Inc.",
    image: img6,
description: [
   "CLIENT			: Fortis Hospital",
"LOCATION		: Site IV, Greater Noida",
"BUILTUP AREA		: 2,00,000 SQFT AREA",
"STATUS			: Completed"

  ]},

{
    title: "Individual Capacity with NBCC",
    image: img7,
description: [
    "CLIENT			: WHO Building, New Delhi",
"LOCATION		: ITO, Ring Road",
"BUILTUP AREA		: 4,40,000 SQFT AREA",
"STATUS			: In Progress"

  ]},

  {
    title: "ENT Hospital",
    image: img8,
description: [
    "CLIENT			: ENT Hospital",
"LOCATION		: Vacoas, Mauritius",
"STATUS			: Completed"

  ]},

  {
    title: "Capetown Supertech",
    image: img9,
description: [
    "CLIENT			: Capetown Supertech",
"LOCATION		: Sector-74, Noida",
"STATUS			: Completed"

  ]},

  {
    title: "Tezu Airport",
    image: img10,
description: [
    "CLIENT			: Tezu Airport",
"LOCATION		: Tezu, Arunachal Pradesh",
"STATUS			: Completed"

  ]},

  {
    title: "Skill Development Ministry",
    image: img11,
description: [
    "CLIENT			: Skill Development Ministry",
"LOCATION		: Moti Baug, New Delhi",
"BUILTUP AREA                   : 2,12,000 SQFT AREA",
"STATUS			: Completed in 2022"
  ]},

  {
    title: "Vardhman Medical College",
    image: img12,
description: [
    "CLIENT			: Vardhman Medical College",
"LOCATION		: Safdarjang Hospital, New Delhi",
"BUILTUP AREA                   : 2,36,000 SQFT AREA",
"STATUS			: Completed in 2007"
  ]},

  {
    title: "Bajaj Auto Ltd.",
    image: img13,
description: [
    "CLIENT			: Bajaj Auto Ltd.",
"LOCATION		: Chakan, Pune",
"STATUS			: Completed in 2000"
  ]},

  {
    title: "RSB Projects Pvt Ltd",
    image: img14,
description: [
    "CLIENT			: RSB Projects Pvt Ltd",
"LOCATION		: Godrej Nest ",
"BUILTUP AREA   : 13,31,000 SQFT AREA",
"STATUS			: In Progress"
  ]},

  {
    title: "Adani Enterprises",
    image: img15,
description: [
    "CLIENT			: Adani Enterprises",
"LOCATION		: MLCP -Sector 29 Gurgaon",
"STATUS			: Pre Construction stage"
  ]},

  {
    title: "Suroj Buildcon Pvt Ltd.",
    image: img16,
description: [
    "CLIENT			: Suroj Buildcon Pvt Ltd.",
"LOCATION		:Plant at Mohali for Freudenberg BUILTUP AREA   : Industrial Shed 3,00,000 sqft",
"STATUS			: In Progress"
  ]},
// Add more project objects as needed
];

const ProjectPage = () => {
const [expandedIndex, setExpandedIndex] = useState(null);

const handleCardClick = (index) => {
    if (expandedIndex === index) {
    setExpandedIndex(null);
    } else {
    setExpandedIndex(index);
    }
};

return (
    <>
    <Header />
    <div className='projectpage-top'>
        <h2>Crafted With Purpose</h2>
        <p>At NKB Inc., we take pride in being associated with some of the country’s most iconic infrastructure developments. Here's a showcase of our completed and ongoing projects across industries—each reflecting our technical excellence, cost-efficiency, and commitment to quality.</p>
    </div>
    <div className="projectpage-wrapper">
        <h2 className="projectpage-heading">Associated Projects : </h2>
        <div className="projectpage-cards-container">
        {projects.map((project, index) => (
            <div
            key={index}
            className={`projectpage-card ${expandedIndex === index ? 'projectpage-expanded' : ''}`}
            onClick={() => handleCardClick(index)}
            >
            {expandedIndex === index ? (
                <>
                <div className="projectpage-left">
                    <img src={project.image} alt={project.title} />
                </div>
                <div className="projectpage-right">
                    <h3>{project.title}</h3>
                    {Array.isArray(project.description) ? (
  <ul className="projectpage-desc-list">
    {project.description.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
) : (
  <p>{project.description}</p>
)}
                </div>
                </>
            ) : (
                 <div className="projectpage-card-collapsed">
    <img src={project.image} alt={project.title} className="projectpage-cover" />
    <div className="projectpage-hover-title">{project.title}</div>
  </div>
)}

            
            </div>
        ))}
        </div>
    </div>
    <Footer />
    <End />
    </>
);
};

export default ProjectPage;

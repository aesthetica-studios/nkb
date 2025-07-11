import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import End from '../components/End';

import img1 from '../assets/project1.jpg';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
import img4 from '../assets/project4.jpg';
import img5 from '../assets/project5.png';
import img6 from '../assets/project6.png';
// Add more images as needed

import './ProjectPage.css'; // Create and style this file

const projects = [
{
    title: "Project 1",
    image: img1,
    description: "A. Proposed M/S. Freudenberg Regional Corporate Center India Pvt. Ltd (FRCCI), Bari Maruali and Ramgarh Alias Manda Morinda Tehsil, Punjab."
},
{
    title: "Project 2",
    image: img6,
    description: "The Sovereign” Thaltej, Ahmedabad (Gujrat)"
},
{
    title: "Project 3",
    image: img2,
    description: "Details of Project 2"
},
{
    title: "Project 4",
    image: img3,
    description: "Details of Project 3"
},
{
    title: "Project 5",
    image: img4,
    description: "Details of Project 3"
},
{
    title: "Project 6",
    image: img5,
    description: "Zydus Lifesciences Ltd. Plot No. 23,25/P, 37, 38, 39, 40/P, 41, 42, 43/P, 45/P, 46/P, Sarkhej Bavla Highway 8A, Opp. Ramdev Masala, Changodar, Tal Sanand, Ahmedabad, Gujrat"
},

{
    title: "Project 7",
    image: img6,
    description: "Wave City EWS & LIG Tower-Ghaziabad, Uttar Pradesh"
},
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
        <h2>Crafted with Purpose</h2>
        <p>At NKB Inc., we take pride in being associated with some of the country’s most iconic infrastructure developments. Here's a showcase of our completed and ongoing projects across industries—each reflecting our technical excellence, cost-efficiency, and commitment to quality.</p>
    </div>
    <div className="projectpage-wrapper">
        <h2 className="projectpage-heading">Associated Projects</h2>
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
                    <p>{project.description}</p>
                </div>
                </>
            ) : (
                <img src={project.image} alt={project.title} className="projectpage-cover" />
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

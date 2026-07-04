import React from 'react';
import '../about.css'
import gradImage from '../assets/gradImage_cropped.png';
import gradImage2 from '../assets/gradImage2_cropped.png';

const About = () => {
    return (
        <div className="about-container">
    {/* LEFT SIDE: Two stacked photos */}
        <div className="image-column">
                <img 
                className="portfolio-img" 
                src={gradImage} 
                alt="Graduation portrait" 
                />
                <img 
                className="portfolio-img" 
                src={gradImage2} 
                alt="Second portfolio showcase" 
                />
        </div>
        
        {/* Right Side: Text */}
        <div className="text-column">
            <h1>Education</h1>
            <p><strong>Institution:</strong> California State University, San Bernardino</p>
            <p><strong>Graduation Date:</strong> December 2025</p>
            <p><strong>Degree Earned:</strong> Bachelor of Science</p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>GPA:</strong> 3.61</p>
            <p><strong>Minor:</strong> Data Science</p>

            <h1>Professional Experience</h1>
            <h2>Instructional Student Assistant - August 2025 to December 2025</h2>
            <p>augagkj</p>
            <h2>Front Desk Receptionist - June 2023 to July 2025</h2>
            <p>sweithwwghlsg</p>

            <h1>Technical Skills</h1>
            <h2>Programming Languages</h2>
            <p>Python, C++, Java, Javascript, R</p>
            <h2>Web and Framework Technologies</h2>
            <p>ReactJS, HTML5, CSS</p>
            <h2>Databases and Tools</h2>
            <p>PostgreSQL (pgAdmin), Git/GitHub</p>

            <h1>Awards</h1>
            <h2>ExCELS Grant</h2>
            <p>Granted in Spring 2024 and Spring 2025 by the NSF Experiential Computing and Engaged Learning Scholarships Program</p>
            <h2>Edison Scholars Fund</h2>
            <p>Granted in Fall 2024 and Fall 2025 by the Edison Scholars Program</p>

            
        </div>
    </div>
  );
};

export default About;

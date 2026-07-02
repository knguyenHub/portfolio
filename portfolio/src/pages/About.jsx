import React from 'react';
import '../about.css'
import gradImage from '../assets/gradImage_cropped.png';
import gradImage2 from '../assets/gradImage2_cropped.png';

const skillList = [
    {id: 1, title: "Programming Languages", desc: "Python, C++, Java, Javascript, R"},
    {id: 2, title: "Web and Framework Technologies", desc: "ReactJS, HTML5, CSS"},
    {id: 3, title: "Databases and Tools", desc: "PostgreSQL (pgAdmin), Git/GitHub"},
];

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
            <h2>About Me</h2>
            <h1>Education</h1>
            <p>Institution: California State University, San Bernardino</p>
            <p>Graduation Date: December 2025</p>
            <p>Degree Earned: Bachelor of Science</p>
            <p>Major: Computer Science</p>
            <p>GPA: 3.61</p>
            <p>Minor: Data Science</p>

            <h1>Technical Skills</h1>
            {skillList.map((skill) => (
                <div key={skill.id}>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                    </div>
                ))}

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

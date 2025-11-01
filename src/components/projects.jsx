import React from 'react'
import "./projects.css";
import project1 from "../assests/images/project1.png";
import project2 from "../assests/images/project2.png";
import project3 from "../assests/images/project3.png";
import project4 from "../assests/images/project4.png";
import project5 from "../assests/images/project5.png";
import project6 from "../assests/images/project6.png";


const projects = [
  {
  id: 1,
  title: "3D Furniture Website",
  image: project1,
  description:
    "An interactive e-commerce platform for furniture shopping, featuring 3D product visualization and a responsive user interface. Users can browse, view 3D models, and authenticate securely using JWT.",
  techStack: "React, Node.js, Express, MongoDB, Three.js, JWT",
  viewLink: "https://3-d-furniture.vercel.app/",
  githubLink: "https://github.com/roaa12114/3D-Furniture"
},
{
  id: 2,
  title: "Sneakzone",
  image: project2,
  description:
    "A sneakers e-commerce website built with React and Firebase, featuring user authentication, real-time Firestore database, and cloud hosting. The design emphasizes responsiveness and scalability.",
  techStack: "React, Firebase (Auth, Firestore, Hosting)",
  viewLink: "https://sneakzone-c56f7.web.app/",
  githubLink: "https://github.com/roaa12114/sneakzone-ecommerce"
},
{
  id: 3,
  title: "Notes Web Application",
  image: project4,
  description:
    "A full-stack note-taking app that allows users to create, edit, and delete notes. It includes secure data management, API integration, and a clean responsive interface.",
  techStack: "React, Node.js, Express, MongoDB",
  viewLink: "#",
  githubLink: "https://github.com/roaa12114/Note-app"
},
{
  id: 4,
  title: "Chat Application (C#)",
  image: project3,
  description:
    "A real-time client–server chat app using multithreading and TCP sockets, demonstrating strong understanding of concurrency and network communication in C#.",
  techStack: "C#, .NET Framework, TCP Sockets",
  viewLink: "",
  githubLink: "https://github.com/roaa12114/Chat-application"
},
{
  id: 5,
  title: "Guess the Word Game",
  image: project5,
  description:
    "A browser-based guessing game built with modular JavaScript and DOM manipulation, featuring persistent gameplay through local storage and mobile-friendly design.",
  techStack: "HTML, CSS, JavaScript",
  viewLink: "https://guess-the-word-game-hangaroo-git-20c6f2-roaas-projects-0573a9b6.vercel.app/",
  githubLink: "https://github.com/roaa12114/Guess-the-Word-Game---Hangaroo-Clone"
},
{
  id: 6,
  title: "Rock-Paper-Scissor Game",
  image: project6,
  description:
    "An interactive JavaScript-based mini-game with real-time score tracking and responsive UI for seamless browser play.",
  techStack: "HTML, CSS, JavaScript",
  viewLink: "#",
  githubLink: "https://github.com/roaa12114/Rock-Paper-Scissor-Game"
}
];

function Projects(){
  const handleUnavailableDemo = (e, projectTitle) => {
    e.preventDefault();
    alert(`Sorry, the live demo for "${projectTitle}" is not available yet.`);
  };

  
  return (
    <div id="projects" className='projects-page'>
        <h1>
            Projects
        </h1>
        <div className="decor-container">
          <div className="decor-line"></div>
          <div className="decor-vertical"></div>
        </div>
        <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card">
              <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              <p> <strong>Tech Stack:</strong> {project.techStack}</p>
              <div className="buttons">
                {project.title === "Chat-app" ? (
                <a 
                   href="" 
                   className="btn view"
                    onClick={(e) => handleUnavailableDemo(e, project.title)}
                >
                    View
                </a>
                ):(
                    <a
                    href={project.viewLink}
                    className="btn view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}

                <a 
                   href={project.githubLink} 
                   className="btn code" 
                   target="_blank" 
                   rel="noopener noreferrer"
                >
                    GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>

  );
}

export default Projects
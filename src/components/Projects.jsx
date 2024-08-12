import React from 'react';

const projects = [
    {
      title: "MERN E-Commerce Store",
      description: "Developed a full-stack e-commerce application using the MERN stack. Features include user authentication, product search, cart management, and a payment gateway.",
      tech: "MongoDB, Express.js, React, Node.js, TailwindCSS",
      link: "https://pacifico-dusky.vercel.app/"
    },
    {
      title: "Actodo App",
      description: "Developed a task management app using React. Features include adding, updating, and deleting tasks with local storage for persistence.",
      tech: "React, TailwindCSS, Local Storage",
      link: "https://actodo-ivory.vercel.app/"
    },
    {
      title: "Quiz App",
      description: "Crafted a dynamic quiz app with HTML, CSS, and JavaScript. The app fetches questions from a JSON file and includes features like random question selection and auto-submission.",
      tech: "HTML, CSS, JavaScript",
      link: "https://nandhagopiv.github.io/properQuiz/"
    },
    {
      "title": "Weather App",
      "description": "Created a dynamic weather app using React, Node.js, and Express.js. The app features an input box where users can enter a location to retrieve real-time weather updates. It fetches weather data from a weather API and displays comprehensive information including the current temperature (30° Celsius in Chennai), weather condition (Mist), humidity (84%), pressure (1005 hPa), visibility (5 KM), wind speed (9.25 KMPH), wind direction (Towards South-East), maximum temperature (30.99° Celsius), minimum temperature (29.44° Celsius), longitude (80.2785), latitude (13.0878), sunrise time (5:56:16), and sunset time (18:31:44).",
      "tech": "React, Node.js, Express.js, Weather API",
      "link": "https://weather-app-api-psi.vercel.app/"
    }
  ];
  
  const Projects = () => {
    return (
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Projects;

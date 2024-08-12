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

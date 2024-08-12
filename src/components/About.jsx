import React, { Fragment } from 'react';

const About = () => (
  <Fragment>
     <div className="home-page">
      <header className="intro">
        <h1>Nandhagopi Vempathur</h1>
        <h2>MERN Stack Developer</h2>
        <p>
          Fresher adept in MERN stack development, specializing in React.js,
          Express.js, MongoDB, and Node.js. Proficient in Virtual DOM concepts,
          JavaScript ES6, and utilizing React Hooks for state management for global state management. Solid understanding of Git version
          control and ready to contribute effectively in collaborative environments.
        </p>
      </header>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>MERN Stack</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
          <li>Tailwind CSS</li>
          <li>React Hooks</li>
          <li>DOM and Virtual DOM</li>
          <li>Git and GitHub</li>
          <li>Version Control</li>
          <li>API Integration</li>
          <li>Server-Side Scripting</li>
          <li>Database Management</li>
          <li>Asynchronous Programming</li>
          <li>Component-Based Architecture</li>
          <li>State Management</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>MBA</h3>
          <p>Hindusthan Institute of Technology, Coimbatore</p>
          <p>(2021 - 2023)</p>
          <p>CGPA: 6.9</p>
        </div>
        <div className="education-item">
          <h3>B.Com (Computer Application)</h3>
          <p>Parvathy’s Arts and Science College, Dindigul</p>
          <p>(2018 - 2021)</p>
          <p>CGPA: 6.5</p>
        </div>
      </section>

      <section className="certificates">
        <h2>Certificates</h2>
        <div className="certificate-item">
          <h3>Full Stack Web Development Program</h3>
          <p>Error Makes Clever Academy</p>
        </div>
        <div className="certificate-item">
          <h3>React.js and UI/UX Designing Certification</h3>
          <p>Internshala</p>
        </div>
      </section>
    </div>
  </Fragment>
);

export default About;

// About.js or wherever you define the About section
import React from "react";
import "./About.css"; // Make sure the CSS is linked

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <div className="left">
          <p>
            I'm Pavan, a passionate and self-driven web developer eager to craft
            meaningful digital experiences.
          </p>
          <p>
            With a background in engineering and a love for clean, efficient
            code, I enjoy solving real-world problems using tech.
          </p>
          <p>
            Currently focused on building full-stack web applications with
            React, Flask, and modern web tools.
          </p>
          <p>
            If you'd like to learn more about my projects or connect with me,
            feel free to check out my <strong>Projects</strong> section or reach
            out through the <strong>Contact</strong> page.
          </p>
          <ul>
            <li>🔧 Developed a Notes App using Flask & JWT Authentication.</li>
            <li>
              🎨 Built responsive web pages with HTML, CSS, and JavaScript.
            </li>
            <li>
              💻 GitHub holds all my project code and continuous learning
              progress.
            </li>
          </ul>
        </div>
        <div className="right">
          <a
            href="/pavan_resume.pdf"
            download
            target="_blank"
            className="resume-btn"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-kumar-reddy-b-353051249/"
            target="_blank"
            className="linkedin-btn "
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

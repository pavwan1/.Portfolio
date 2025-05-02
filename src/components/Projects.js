/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Flask Notes App</h3>
          <p>
            • FullStack web app with JWT authentication for secure
            login/register
          </p>
          <p>• User can add, edit, delete personal notes</p>
          <p>• Notes displayed dynamically with Flask templates</p>
          <a
            href="https://notes-app-bux9.onrender.com/login"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>• Built with pure HTML and CSS</p>
          <p>• Fully responsive and clean design</p>
          <p>• Live on Vercel with custom sections like About, Skills..</p>
          <a
            href="https://portfolio-pavwan1.vercel.app/"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Product Landing Page</h3>
          <p>• Created using HTML and CSS</p>
          <p>• Focused on layout, spacing, and visual hierarchy</p>
          <p>• Fully responsive for mobile and desktop</p>
          <a
            href="https://dropdown-design.vercel.app/"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

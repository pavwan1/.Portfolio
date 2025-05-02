import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill">🌐HTML</div>
          <div className="skill">🎨CSS</div>
          <div className="skill">
            <strong>𝐉</strong>JavaScript
          </div>
          <div className="skill">⚛️ React</div>
          <div className="skill">🐍Python</div>
          <div className="skill">🧪Flask</div>
          <div className="skill">🗃️Sqlite3</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

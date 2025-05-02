import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h3>Connect with Me</h3>
          <p>For project info, feel free to check out my profiles:</p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/pavan-kumar-reddy-b-353051249/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Connect with me on LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pavwan1"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐱 Visit my GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-right">
          <h3>Collaboration</h3>
          <p>
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>
          <p>For any inquiries, you can contact me via email:</p>
          <a href="mailto:pavanreddy20021@gmail.com" className="email-link">
            📧 Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

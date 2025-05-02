import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="welcome-text">Welcome to my digital world 🌍</p>
        <h1>Hey, I'm Pavan 👋</h1>
        <p>
          Aspiring Web Developer | Full Stack Enthusiast | Python Developer{" "}
        </p>
      </div>
      <div className="home-image">
       {/* <img src="/images/IMG2.png" alt="pavan" /> */}
      </div>
    </section>
  );
};

export default Home;

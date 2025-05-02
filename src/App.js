import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {" "}
        ⬆️
      </button>
      <Footer />
    </div>
  );
}

export default App;

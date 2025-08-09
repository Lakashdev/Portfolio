import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Expereince";
import { Element } from "react-scroll";

function Home() {
  return (
    <div>
       {/* <h1 className="text-center mt-5">Welcome to My Portfolio</h1>
      <p className="text-center">Let’s build something amazing!</p> */}

      <Element name="home">
      <Hero/>
      </Element>

      {/* Experience Section */}
      <Element name="experience">
      <Experience />
      </Element>

      {/* Tech Stack Section */}
      <Element name="techstack">
      
      
      <TechStack/>
      </Element>

      <Element name="projects">
      {/* Projects Section */}
      <Projects/>
      </Element>

      <Element name="about">
      {/* About Section */}
      <About />
      </Element>
    </div>
    
  );
}

export default Home;

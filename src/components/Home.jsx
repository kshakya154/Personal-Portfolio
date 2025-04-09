import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <CustomCursor />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

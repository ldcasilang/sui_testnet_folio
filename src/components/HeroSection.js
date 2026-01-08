import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Hello! My name is</h1>
        <h2>LADY DIANE CASILANG</h2>
        <p>Project Management & Blockchain Smart Contracts Intern</p>
        <div className="buttons">
          <button className="linkedin">LinkedIn</button>
          <button className="github">GitHub</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

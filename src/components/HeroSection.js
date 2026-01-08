import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [name, setName] = useState("LADY DIANE CASILANG");
  const [position, setPosition] = useState(
    "Project Management & Blockchain Smart Contracts Intern"
  );

  return (
    <section className="hero">
      <button className="get-testnet">Get Testnet Sui</button>
      <div className="hero-card">
        {/* Use public folder image directly */}
        <img className="hero-photo" src="/hero.png" alt="Profile" />

        <div className="content">
          <h1>Hello! My name is</h1>
          <h2>{name}</h2>

          <div className="input-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <button onClick={() => alert("Name Updated!")}>Update</button>
          </div>

          <div className="input-group">
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position"
            />
            <button onClick={() => alert("Position Updated!")}>Update</button>
          </div>

          <p>{position}</p>

          <div className="buttons">
            <button className="linkedin">LinkedIn</button>
            <button className="github">GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

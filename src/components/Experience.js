import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    { year: "2025", role: "Co-Head for Creatives", company: "DEVCON Manila Chapter" },
    { year: "2025", role: "Layout Artist", company: "AWS User Group BuildHers+ Philippines" },
    { year: "2023", role: "Director for Creatives", company: "Junior Philippine Computer Society" },
  ];

  return (
    <section className="experience">
      <h3>Experience</h3>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-box" key={index}>
            <h4>{exp.year}</h4>
            <p>
              <strong>{exp.role}</strong>
              <br />
              {exp.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

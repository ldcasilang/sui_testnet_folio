import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "Graphic Design",
    "UI/UX Design",
    "Project Management",
    "Full Stack Development",
    "Web and AppDevelopment",
  ];

  return (
    <section className="skills">
      <h3>Skills & Expertise</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

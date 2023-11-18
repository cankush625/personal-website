import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import skillCategories from "../../data/skills";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    getSkill();
  }, []);

  const getSkill = async () => {
    setSkill(skillCategories.map((doc) => doc));
  };

  const renderSkill = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="skill-image" alt="skill" />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container skills-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Skills".split("")}
            idx={15}
          />
        </h1>
        <div>{renderSkill(skill)}</div>
      </div>
    </>
  );
};

export default Skills;

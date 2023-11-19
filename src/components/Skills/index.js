import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import skillCategories from "../../data/skills";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [skill, setSkill] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showKey, setShowKey] = useState(0);

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

  const renderSkill = (skills) => {
    return (
      <div className="images-container">
        {skills.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="skill-image" alt="skill" />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button
                  className="btn"
                  onClick={() => {
                    setShowKey(idx);
                    setShowPopup(true);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderCategorySkills = (skills) => {
    return (
      <div className={"skills-container"}>
        {skills?.map((port, idx) => {
          return (
            <div key={idx}>
              <h3>{port.factorName}</h3>
              <div className={"factor-skills-container"}>
                {port.skillList?.map((skill, idx) => {
                  return (
                    <div>
                      <div className={"skill-logo"} key={idx}>
                        {skill?.logo}
                      </div>
                      {/*<div className={"skill-name"}>{skill?.name}</div>*/}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={showPopup ? "popup" : "popup-disabled"}>
        <div>
          <FontAwesomeIcon
            onClick={() => setShowPopup(false)}
            icon={faClose}
            color={"#ffd700"}
            size={"3x"}
            className={showPopup ? "close-popup-icon" : ""}
          />
          <h1>{skill[showKey]?.name}</h1>
          <div className={"skills-section"}>
            {renderCategorySkills(skill[showKey]?.skills)}
          </div>
        </div>
      </div>
      <div className={"container skills-page"}>
        <div className={showPopup ? "blur-background" : ""}>
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Skills".split("")}
              idx={15}
            />
          </h1>
          <div>{renderSkill(skill)}</div>
        </div>
      </div>
    </>
  );
};

export default Skills;

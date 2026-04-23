import React, { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import skillCategories from "../../data/skills";
import {
  faClose,
  faServer,
  faDatabase,
  faCloud,
  faGears,
  faCode,
  faMobileScreen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollLock from "../../hooks/useScrollLock";

const CATEGORY_ICONS = {
  Backend: faServer,
  Database: faDatabase,
  "Cloud Computing": faCloud,
  DevOps: faGears,
  Frontend: faCode,
  "Mobile Apps": faMobileScreen,
  CRM: faUsers,
};

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [skill, setSkill] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showKey, setShowKey] = useState(0);
  const popupRef = useRef(null);

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

  useEffect(() => {
    // If popup is opened and clicked outside the popup then close the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    }

    // If popup is opened and Esc key is pressed then close the popup
    function handleEscKey(event) {
      if (event.key === 'Escape' && showPopup) {
        closePopup();
      }
    }

    // Only add the event listener when the popup is shown
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [showPopup]);

  useScrollLock(showPopup);

  // Function to close popup and clean URL
  const closePopup = () => {
    setShowPopup(false);
    // Remove query parameters from URL
    // removeQueryParamFromURL();
  };

  const getSkill = async () => {
    setSkill(skillCategories.map((doc) => doc));
  };

  const renderSkillCards = (skills) => {
    return (
      <div className="skill-cards-grid">
        {skills.map((category, idx) => {
          const allSkills = category.skills?.flatMap((g) => g.skillList) ?? [];
          const previewSkills = allSkills.slice(0, 5);
          const remaining = allSkills.length - previewSkills.length;

          return (
            <div
              className="skill-card"
              key={idx}
              onClick={() => {
                setShowKey(idx);
                setShowPopup(true);
              }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <FontAwesomeIcon icon={CATEGORY_ICONS[category.name] ?? faCode} />
                </div>
                <div>
                  <h3 className="skill-card-name">{category.name}</h3>
                  <span className="skill-card-desc">{category.description}</span>
                </div>
              </div>
              <div className="skill-card-preview">
                {previewSkills.map((s, i) => (
                  <div className="skill-card-chip" key={i} title={s.name}>
                    <div className="skill-card-chip-logo">{s.logo}</div>
                  </div>
                ))}
                {remaining > 0 && (
                  <div className="skill-card-chip skill-card-chip-more">
                    +{remaining}
                  </div>
                )}
              </div>
              <div className="skill-card-footer">
                <span>{allSkills.length} skills</span>
                <span className="explore-label">Explore →</span>
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
                    <div className={"skill-chip"} key={idx}>
                      <div className={"skill-logo"}>
                        {skill?.logo}
                      </div>
                      <div className={"skill-name"}>{skill?.name}</div>
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
      <Helmet>
        <title>Skills | Ankush Chavan</title>
        <meta name="description" content="Explore Ankush Chavan's technical skills spanning backend development, distributed systems, cloud infrastructure, databases, and more." />
        <meta property="og:title" content="Skills | Ankush Chavan" />
        <meta property="og:description" content="Explore Ankush Chavan's technical skills spanning backend development, distributed systems, cloud infrastructure, databases, and more." />
        <meta property="og:url" content="https://ankushchavan.com/#/skills" />
      </Helmet>
      {showPopup && <div className="popup-backdrop" onClick={closePopup} />}
      <div className={showPopup ? "popup" : "popup-disabled"} ref={popupRef}>
        <div>
          <FontAwesomeIcon
            onClick={closePopup}
            icon={faClose}
            className={showPopup ? "close-popup-icon" : ""}
          />
          <h1>{skill[showKey]?.name}</h1>
          <div className={"skills-section"}>
            {showPopup && renderCategorySkills(skill[showKey]?.skills)}
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
          <div>{renderSkillCards(skill)}</div>
        </div>
      </div>
    </>
  );
};

export default Skills;

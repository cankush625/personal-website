import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import artCategories from "../../data/arts";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArtGallery = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [art, setArt] = useState([]);
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
    getArt();
  }, []);

  const getArt = async () => {
    setArt(artCategories.map((doc) => doc));
  };

  const renderArt = (arts) => {
    return (
      <div className="images-container">
        {arts.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="art-image" alt="art" />
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
          <h1>{art[showKey]?.name}</h1>
          <div className={"arts-section"}>
            <img
              src={art[showKey]?.image}
              alt={"art"}
              className={"art-full-popup"}
            />
          </div>
        </div>
      </div>
      <div className={"container art-gallery-page"}>
        <div className={showPopup ? "blur-background" : ""}>
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Arts".split("")}
              idx={15}
            />
          </h1>
          <div>{renderArt(art)}</div>
        </div>
      </div>
    </>
  );
};

export default ArtGallery;

import React, { useEffect, useRef, useState } from "react";
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
    getArt();
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

  // Function to close popup and clean URL
  const closePopup = () => {
    setShowPopup(false);
    // Remove query parameters from URL
    // removeQueryParamFromURL();
  };

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
              <div className="image-date">
                <p>{port.creationDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <div className="button-container">
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
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={showPopup ? "art-popup" : "popup-disabled"} ref={popupRef}>
        <div>
          <FontAwesomeIcon
            onClick={closePopup}
            icon={faClose}
            color={"#e46976"}
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

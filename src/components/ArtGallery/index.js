import React, { useEffect, useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import artCategories from "../../data/arts";
import { faClose, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArtGallery = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [art, setArt] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [showKey, setShowKey] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const popupRef = useRef(null);
  const touchStartXRef = useRef(null);
  const wheelCooldownRef = useRef(false);
  const wheelResetTimerRef = useRef(null);

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
    // Arrow keys navigate between paintings
    function handleEscKey(event) {
      if (event.key === 'Escape' && showPopup) {
        closePopup();
      } else if (event.key === 'ArrowRight' && showPopup) {
        navigateNext();
      } else if (event.key === 'ArrowLeft' && showPopup) {
        navigatePrev();
      }
    }

    function handleWheel(event) {
      if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
      event.preventDefault();
      if (wheelCooldownRef.current) {
        // Keep pushing out the reset while gesture is still active
        clearTimeout(wheelResetTimerRef.current);
        wheelResetTimerRef.current = setTimeout(() => {
          wheelCooldownRef.current = false;
        }, 400);
        return;
      }
      wheelCooldownRef.current = true;
      wheelResetTimerRef.current = setTimeout(() => {
        wheelCooldownRef.current = false;
      }, 400);
      event.deltaX > 0 ? navigateNext() : navigatePrev();
    }

    // Only add the event listener when the popup is shown
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [showPopup, art.length]);

  const navigateNext = () => {
    setSlideDirection('right');
    setShowKey((prev) => (prev + 1) % art.length);
  };

  const navigatePrev = () => {
    setSlideDirection('left');
    setShowKey((prev) => (prev - 1 + art.length) % art.length);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const delta = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? navigateNext() : navigatePrev();
    }
    touchStartXRef.current = null;
  };

  // Function to close popup and clean URL
  const closePopup = () => {
    setShowPopup(false);
    setShowFullImage(false);
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
            <div
              className="image-box"
              key={idx}
              onClick={() => {
                setShowKey(idx);
                setShowPopup(true);
              }}
            >
              <img src={port.image} className="art-image" alt="art" />
              <div className="image-date">
                <p>{port.creationDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {showFullImage && (
        <div className="art-lightbox" onClick={() => setShowFullImage(false)}>
          <img src={art[showKey]?.image} alt={"art"} className="art-lightbox-img" />
        </div>
      )}
      <div
        className={showPopup ? "art-popup" : "popup-disabled"}
        ref={popupRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div>
          <FontAwesomeIcon
            onClick={closePopup}
            icon={faClose}
            color={"#94a3b8"}
            size={"lg"}
            className={showPopup ? "close-popup-icon" : ""}
          />
          <h1 key={`title-${showKey}`} className={`art-slide-in-${slideDirection}`}>{art[showKey]?.name}</h1>
          <div className={"arts-section"}>
            <img
              key={showKey}
              src={art[showKey]?.image}
              alt={"art"}
              className={`art-full-popup art-slide-in-${slideDirection}`}
              onClick={() => setShowFullImage(true)}
            />
          </div>
          <div className="art-nav">
            <button className="art-nav-btn" onClick={navigatePrev} aria-label="Previous painting">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className="art-nav-counter">{showKey + 1} / {art.length}</span>
            <button className="art-nav-btn" onClick={navigateNext} aria-label="Next painting">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
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

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import books from "../../data/books";
import papers from "../../data/papers";
import blogs from "../../data/blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faClose } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";

const PaperShelf = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [book, setBook] = useState({});
  const [paper, setPaper] = useState({});
  const [blog, setBlog] = useState({});
  const [showBookKey, setShowBookKey] = useState("read");
  const [showPaperKey, setShowPaperKey] = useState("read");
  const [showBlogKey, setShowBlogKey] = useState("read");
  const [showPopup, setShowPopup] = useState(false);
  const [showSummary, setShowSummary] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    getBook();
    getPaper();
    getBlog();

    showSummaryPopupIfSummaryInQueryParams();
  }, []);

  useEffect(() => {
    // If popup is opened and clicked outside the popup then close the popup
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeSummaryPopup();
      }
    }

    // If popup is open and Esc key is pressed then close the popup
    function handleEscKey(event) {
      if (event.key === 'Escape' && showPopup) {
        closeSummaryPopup();
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

  const getBook = async () => {
    setBook(books);
  };

  const getPaper = async () => {
    setPaper(papers);
  };

  const getBlog = async () => {
    setBlog(blogs);
  };

  const showSummaryPopupIfSummaryInQueryParams = () => {
    // Check URL for popup parameters
    const hashPart = window.location.hash;
    const queryStartIndex = hashPart.indexOf('?');
    if (queryStartIndex !== -1) {
      const queryString = hashPart.substring(queryStartIndex);
      const queryParams = new URLSearchParams(queryString);
      const summaryId = queryParams.get('summary');

      if (summaryId) {
        const summaryIdData = summaryId.split("-");
        const section = summaryIdData[0];
        const action = summaryIdData[1];
        // Convert to number if it's a numeric ID
        const idx = parseInt(summaryIdData[2], 10);
        switch (section) {
          case "books":
            setShowSummary(books[action][idx].summary);
            break;
          case "papers":
            setShowSummary(papers[action][idx].summary);
            break;
          case "blogs":
            setShowSummary(blogs[action][idx].summary);
            break;
        }
        setShowPopup(true);
      }
    }
  }

  const updateURLWithSummaryQueryParam = (summaryId) => {
    const hashPart = window.location.hash;
    let basePath;

    // Remove any existing query parameters
    const queryStartIndex = hashPart.indexOf('?');
    if (queryStartIndex !== -1) {
      basePath = hashPart.substring(0, queryStartIndex);
    } else {
      basePath = hashPart;
    }

    // Append the new query parameter
    const newUrl = `${window.location.origin}${window.location.pathname}${basePath}?summary=${summaryId}`;
    window.history.pushState({}, '', newUrl);
  }

  const removeSummaryQueryParamFromURL = () => {
    const hashPart = window.location.hash;
    const queryStartIndex = hashPart.indexOf('?');

    if (queryStartIndex !== -1) {
      const basePath = hashPart.substring(0, queryStartIndex);
      const newUrl = `${window.location.origin}${window.location.pathname}${basePath}`;
      window.history.pushState({}, '', newUrl);
    }
  }

  // Function to open popup and update URL
  const openSummaryPopup = (summaryId, summary) => {
    setShowSummary(summary);
    setShowPopup(true);

    // Update URL without full page reload
    updateURLWithSummaryQueryParam(summaryId)
  };

  // Function to close popup and clean URL
  const closeSummaryPopup = () => {
    setShowPopup(false);
    // Remove query parameters from URL
    removeSummaryQueryParamFromURL();
  };

  const renderBook = (books) => {
    return (
      <div className="images-container">
        {books[showBookKey]?.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="entity-image" alt="book" />
              <div className="read-date">
                <p>{port.readDate ?? port.writtenDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="authors">Authors: {port.authors}</h4>
                <Box sx={{ width: "100%", display: "inline-block" }}>
                  <LinearProgress
                    variant="determinate"
                    value={(port.pagesRead / port.totalPages) * 100}
                  />
                </Box>
                <div className="button-container">
                  <button className="btn" onClick={() => {}}>
                    <span className={"btn-name"}>View</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#ffffff" />
                  </button>
                  <button
                    className={port.summary ? "btn": "btn-disabled"}
                    onClick={() => {
                      const summaryId = "books" + "-" + showBookKey + "-" + idx
                      openSummaryPopup(summaryId, port.summary);
                    }}
                  >
                    Summary
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderPaper = (papers) => {
    return (
      <div className="images-container">
        {papers[showPaperKey]?.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="entity-image"
                alt="research paper"
              />
              <div className="read-date">
                <p>{port.readDate ?? port.writtenDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="authors">Authors: {port.authors}</h4>
                <div className="button-container">
                  <a target={"_blank"} rel={"noreferrer"} href={port.link}>
                    <button className="btn" onClick={() => {}}>
                      <span className={"btn-name"}>View</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#ffffff" />
                    </button>
                  </a>
                  <button
                    className={port.summary ? "btn": "btn-disabled"}
                    onClick={() => {
                      const summaryId = "papers" + "-" + showBookKey + "-" + idx;
                      openSummaryPopup(summaryId, port.summary);
                    }}
                  >
                    Summary
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderBlog = (blogs) => {
    return (
      <div className="images-container">
        {blogs[showBlogKey]?.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="entity-image" alt="blog" />
              <div className="read-date">
                <p>{port.readDate ?? port.writtenDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="authors">Authors: {port.authors}</h4>
                <div className="button-container">
                  <a target={"_blank"} rel={"noreferrer"} href={port.link}>
                    <button className="btn" onClick={() => {}}>
                      <span className={"btn-name"}>View</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#ffffff" />
                    </button>
                  </a>
                  <button
                    className={port.summary ? "btn": "btn-disabled"}
                    onClick={() => {
                      const summaryId = "blogs" + "-" + showBookKey + "-" + idx;
                      openSummaryPopup(summaryId, port.summary);
                    }}
                  >
                    Summary
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
      <div className={showPopup ? "summary-popup" : "popup-disabled"} ref={popupRef}>
        <div>
          <FontAwesomeIcon
            onClick={closeSummaryPopup}
            icon={faClose}
            color={"#e46976"}
            size={"3x"}
            className={showPopup ? "close-summary-popup-icon" : ""}
          />
          <h1 className={"summary-title"}>{showSummary?.title}</h1>
          <hr/>
          <div className={"summary-section"}>
            <p>{parse(showSummary.summary ? showSummary.summary : "")}</p>
          </div>
        </div>
      </div>
      <div className={"container paper-shelf-page"}>
        <div className={showPopup ? "blur-background" : ""}>
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Paper Shelf".split("")}
              idx={15}
            />
          </h1>
          <div className={"content-zone"}>
            <Accordion defaultExpanded className={"content-sections"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={"expand-icon"} />}
                aria-controls="eng-books-content"
                className={"eng-books-header"}
              >
                <h3>Engineering Books</h3>
              </AccordionSummary>
              <AccordionDetails className={"content-details"}>
                <div>
                  <div className={"action-section"}>
                    <ul>
                      <li>
                        <button
                          className={`action-button ${
                            showBookKey === "read" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowBookKey("read");
                          }}
                        >
                          Read
                        </button>
                      </li>
                      <li>
                        <button
                          className={`action-button ${
                            showBookKey === "written" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowBookKey("written");
                          }}
                        >
                          Written
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>{renderBook(book)}</div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion className={"content-sections"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={"expand-icon"} />}
                aria-controls="research-papers-content"
                className={"research-papers-header"}
              >
                <h3>Research Papers</h3>
              </AccordionSummary>
              <AccordionDetails className={"content-details"}>
                <div>
                  <div className={"action-section"}>
                    <ul>
                      <li>
                        <button
                          className={`action-button ${
                            showPaperKey === "read" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowPaperKey("read");
                          }}
                        >
                          Read
                        </button>
                      </li>
                      <li>
                        <button
                          className={`action-button ${
                            showPaperKey === "written" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowPaperKey("written");
                          }}
                        >
                          Written
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>{renderPaper(paper)}</div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion className={"content-sections"}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={"expand-icon"} />}
                aria-controls="eng-blogs-content"
                className={"eng-blogs-header"}
              >
                <h3>Engineering Blogs</h3>
              </AccordionSummary>
              <AccordionDetails className={"content-details"}>
                <div>
                  <div className={"action-section"}>
                    <ul>
                      <li>
                        <button
                          className={`action-button ${
                            showBlogKey === "read" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowBlogKey("read");
                          }}
                        >
                          Read
                        </button>
                      </li>
                      <li>
                        <button
                          className={`action-button ${
                            showBlogKey === "written" ? "active-action-button" : ""
                          }`}
                          onClick={() => {
                            setShowBlogKey("written");
                          }}
                        >
                          Written
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>{renderBlog(blog)}</div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaperShelf;

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import books from "../../data/books";

const PaperShelf = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [book, setBook] = useState({});
  const [showBookKey, setShowBookKey] = useState("read");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    setBook(books);
  };

  const renderBook = (books) => {
    return (
      <div className="images-container">
        {books[showBookKey]?.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="entity-image" alt="book" />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="authors">Authors: {port.authors}</h4>
                <button className="btn" onClick={() => {}}>
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
    <div className={"container paper-shelf-page"}>
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Paper Shelf".split("")}
          idx={15}
        />
      </h1>
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
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
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
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaperShelf;

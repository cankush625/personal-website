import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import usePopupClose from "../../hooks/usePopupClose";
import useScrollLock from "../../hooks/useScrollLock";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import books from "../../data/books";
import papers from "../../data/papers";
import blogs from "../../data/blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faClose } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";

const SECTIONS = [
  { key: "books",  label: "Engineering Books",  data: books,  defaultExpanded: true },
  { key: "papers", label: "Research Papers",     data: papers, defaultExpanded: false },
  { key: "blogs",  label: "Engineering Blogs",   data: blogs,  defaultExpanded: false },
];

const PaperShelf = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [activeKeys, setActiveKeys] = useState({ books: "read", papers: "read", blogs: "read" });
  const [showPopup, setShowPopup] = useState(false);
  const [showSummary, setShowSummary] = useState({});
  const popupRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass("text-animate-hover"), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    showSummaryPopupIfSummaryInQueryParams();
  }, []);

  // Function to close popup and clean URL
  const closeSummaryPopup = () => {
    setShowPopup(false);
    removeSummaryQueryParamFromURL();
  };

  usePopupClose(popupRef, showPopup, closeSummaryPopup);
  useScrollLock(showPopup);

  const showSummaryPopupIfSummaryInQueryParams = () => {
    const hashPart = window.location.hash;
    const queryStartIndex = hashPart.indexOf('?');
    if (queryStartIndex === -1) return;

    const queryParams = new URLSearchParams(hashPart.substring(queryStartIndex));
    const summaryId = queryParams.get('summary');
    if (!summaryId) return;

    const [section, action, rawIdx] = summaryId.split("-");
    const idx = parseInt(rawIdx, 10);
    const sectionData = { books, papers, blogs }[section];
    if (sectionData?.[action]?.[idx]?.summary) {
      setShowSummary(sectionData[action][idx].summary);
      setShowPopup(true);
    }
  };

  const updateURLWithSummaryQueryParam = (summaryId) => {
    const hashPart = window.location.hash;
    const queryStartIndex = hashPart.indexOf('?');
    const basePath = queryStartIndex !== -1 ? hashPart.substring(0, queryStartIndex) : hashPart;
    window.history.pushState({}, '', `${window.location.origin}${window.location.pathname}${basePath}?summary=${summaryId}`);
  };

  const removeSummaryQueryParamFromURL = () => {
    const hashPart = window.location.hash;
    const queryStartIndex = hashPart.indexOf('?');
    if (queryStartIndex !== -1) {
      const basePath = hashPart.substring(0, queryStartIndex);
      window.history.pushState({}, '', `${window.location.origin}${window.location.pathname}${basePath}`);
    }
  };

  const openSummaryPopup = (summaryId, summary) => {
    setShowSummary(summary);
    setShowPopup(true);
    updateURLWithSummaryQueryParam(summaryId);
  };

  const renderItems = (sectionKey, data, activeKey) => {
    const items = data[activeKey] ?? [];
    return (
      <div className="images-container">
        {items.map((port, idx) => {
          const summaryId = `${sectionKey}-${activeKey}-${idx}`;
          const viewButton = (
            <button className="btn">
              <span className="btn-name">View</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="#ffffff" />
            </button>
          );

          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="entity-image" alt={port.name} loading="lazy" />
              <div className="read-date">
                <p>{port.readDate ?? port.writtenDate}</p>
              </div>
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <h4 className="authors">Authors: {port.authors}</h4>

                {sectionKey === "books" && (
                  <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "6px", height: "16px" }}>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: port.pagesRead === port.totalPages ? "rgba(5,115,12,0.4)" : "rgba(var(--color-accent-rgb),0.2)" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(port.pagesRead / port.totalPages) * 100}%`,
                          backgroundColor: port.pagesRead === port.totalPages ? "#05730c" : "var(--color-accent)",
                        }}
                      />
                    </div>
                    {port.pagesRead === port.totalPages && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7.5" stroke="#05730c" fill="rgba(5,115,12,0.2)" />
                        <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#05730c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                )}

                <div className="button-container">
                  {port.link
                    ? <a target="_blank" rel="noreferrer" href={port.link}>{viewButton}</a>
                    : viewButton
                  }
                  <button
                    className={port.summary ? "btn" : "btn-disabled"}
                    onClick={() => openSummaryPopup(summaryId, port.summary)}
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

  const renderReadWrittenToggle = (sectionKey) => (
    <div className="action-section">
      <ul>
        {["read", "written"].map((tab) => (
          <li key={tab}>
            <button
              className={`action-button ${activeKeys[sectionKey] === tab ? "active-action-button" : ""}`}
              onClick={() => setActiveKeys((prev) => ({ ...prev, [sectionKey]: tab }))}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Paper Shelf | Ankush Chavan</title>
        <meta name="description" content="Books, research papers, and tech blogs curated by Ankush Chavan — covering distributed systems, backend engineering, and software architecture." />
        <meta property="og:title" content="Paper Shelf | Ankush Chavan" />
        <meta property="og:description" content="Books, research papers, and tech blogs curated by Ankush Chavan — covering distributed systems, backend engineering, and software architecture." />
        <meta property="og:url" content="https://ankushchavan.com/paper-shelf" />
      </Helmet>
      {showPopup && <div className="popup-backdrop" onClick={closeSummaryPopup} />}
      <div className={showPopup ? "summary-popup" : "popup-disabled"} ref={popupRef}>
        <FontAwesomeIcon
          onClick={closeSummaryPopup}
          icon={faClose}
          className="close-summary-popup-icon"
        />
        <h1 className="summary-title">{showSummary?.title}</h1>
        <div className="summary-section">
          {parse(showSummary.summary ? showSummary.summary : "")}
        </div>
      </div>
      <div className="container paper-shelf-page">
        <div className={showPopup ? "blur-background" : ""}>
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Paper Shelf".split("")}
              idx={15}
            />
          </h1>
          <Accordion
            defaultValue={SECTIONS.filter(s => s.defaultExpanded).map(s => s.key)}
            className="content-zone"
          >
            {SECTIONS.map(({ key, label, data }) => (
              <AccordionItem key={key} value={key} className="content-sections">
                <AccordionTrigger
                  aria-controls={`${key}-content`}
                  className={`${key}-header`}
                >
                  <h3>{label}</h3>
                </AccordionTrigger>
                <AccordionContent className="content-details">
                  <div>
                    {renderReadWrittenToggle(key)}
                    {renderItems(key, data, activeKeys[key])}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PaperShelf;

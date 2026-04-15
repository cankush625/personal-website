import "./index.scss";
import Sidebar from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Home from "../Home";
import Skills from "../Skills";
import Career from "../Career";
import PaperShelf from "../PaperShelf";
import ArtGallery from "../ArtGallery";
import Contact from "../Contact";

const SECTION_MAP = {
  "/": "home",
  "/skills": "skills",
  "/career": "career",
  "/paper-shelf": "paper-shelf",
  "/art-gallery": "art-gallery",
  "/contact": "contact",
};

const SECTION_TO_PATH = Object.fromEntries(
  Object.entries(SECTION_MAP).map(([path, id]) => [id, path])
);

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigatingFromObserver = useRef(false);
  const isFirstRender = useRef(true);
  // Stable ref so the observer effect never needs to re-run when navigate changes
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;
  // Track each section's intersection ratio to always activate the most-visible one
  const sectionRatios = useRef(
    Object.fromEntries(Object.values(SECTION_MAP).map((id) => [id, 0]))
  );

  // On direct URL visit or back/forward navigation, scroll to the matching section
  useEffect(() => {
    if (navigatingFromObserver.current) return;
    const sectionId = SECTION_MAP[location.pathname];
    if (!sectionId) return;
    const behavior = isFirstRender.current ? "auto" : "smooth";
    isFirstRender.current = false;
    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior });
      }
    }, 50);
  }, [location.pathname]);

  // Keep URL in sync as user scrolls through sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update ratios for all changed entries
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.intersectionRatio;
        });

        // Always activate the section with the highest visible ratio
        const topId = Object.entries(sectionRatios.current).sort(
          ([, a], [, b]) => b - a
        )[0]?.[0];

        if (topId) {
          const path = SECTION_TO_PATH[topId];
          if (path) {
            navigatingFromObserver.current = true;
            navigateRef.current(path, { replace: true });
            setTimeout(() => {
              navigatingFromObserver.current = false;
            }, 100);
          }
        }
      },
      {
        // Section becomes active when its top half enters the viewport
        rootMargin: "0px 0px -50% 0px",
        // Multiple thresholds so ratio comparisons are meaningful
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    Object.values(SECTION_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"App"}>
      <Sidebar />
      <div className={"page"}>
        <section id="home" className="scroll-section">
          <Home />
        </section>
        <section id="skills" className="scroll-section">
          <Skills />
        </section>
        <section id="career" className="scroll-section">
          <Career />
        </section>
        <section id="paper-shelf" className="scroll-section">
          <PaperShelf />
        </section>
        <section id="art-gallery" className="scroll-section">
          <ArtGallery />
        </section>
        <section id="contact" className="scroll-section">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Layout;

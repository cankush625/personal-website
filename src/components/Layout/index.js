import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home";
import Skills from "../Skills";
import Career from "../Career";
import PaperShelf from "../PaperShelf";
import ArtGallery from "../ArtGallery";
import Contact from "../Contact";

const MOBILE_BREAKPOINT = 1200;

const SECTION_MAP = {
  "/": "home",
  "/skills": "skills",
  "/career": "career",
  "/paper-shelf": "paper-shelf",
  "/art-gallery": "art-gallery",
  "/contact": "contact",
};

const Layout = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth <= MOBILE_BREAKPOINT
  );
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // When a router link (e.g. "CONTACT ME") is followed on mobile,
  // scroll to the matching section instead of re-rendering at top
  useEffect(() => {
    if (!isMobile) return;
    const sectionId = SECTION_MAP[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [isMobile, location.pathname]);

  return (
    <div className={"App"}>
      <Sidebar isMobile={isMobile} />
      <div className={"page"}>
        {isMobile ? (
          <>
            <section id="home" className="mobile-scroll-section">
              <Home />
            </section>
            <section id="skills" className="mobile-scroll-section">
              <Skills />
            </section>
            <section id="career" className="mobile-scroll-section">
              <Career />
            </section>
            <section id="paper-shelf" className="mobile-scroll-section">
              <PaperShelf />
            </section>
            <section id="art-gallery" className="mobile-scroll-section">
              <ArtGallery />
            </section>
            <section id="contact" className="mobile-scroll-section">
              <Contact />
            </section>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Layout;

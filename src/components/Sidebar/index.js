import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
// import LogoSubtitle from "../../assets/images/logo_subtitle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  // faUser,
  faBars,
  faClose,
  faCogs,
  faImages,
  faBriefcase,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const SHOW_INSTAGRAM = process.env.REACT_APP_SHOW_INSTAGRAM === "true";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (e, sectionId, path) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    navigate(path, { replace: true });
    setShowNav(false);
  };

  return (
    <div className="nav-bar">
      <a className="logo" href="#home" onClick={(e) => handleNavClick(e, "home", "/")}>
        <img src={Logo} alt="logo" />
        {/*<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>*/}
      </a>
      <nav className={showNav ? "mobile-show" : ""}>
        <a
          href="#home"
          className={isActive("/") ? "active" : ""}
          onClick={(e) => handleNavClick(e, "home", "/")}
        >
          <FontAwesomeIcon icon={faHome} color="var(--color-icon-muted)" />
        </a>
        {/*Hidden About section because the about section content has been*/}
        {/*moved to home page*/}
        {/*<a href="#about" className={`about-link${isActive("/about") ? " active" : ""}`} onClick={(e) => handleNavClick(e, "about", "/about")}>*/}
        {/*  <FontAwesomeIcon icon={faUser} color="var(--color-icon-muted)" />*/}
        {/*</a>*/}
        <a
          href="#skills"
          className={`skills-link${isActive("/skills") ? " active" : ""}`}
          onClick={(e) => handleNavClick(e, "skills", "/skills")}
        >
          <FontAwesomeIcon icon={faCogs} color="var(--color-icon-muted)" />
        </a>
        <a
          href="#career"
          className={`career-link${isActive("/career") ? " active" : ""}`}
          onClick={(e) => handleNavClick(e, "career", "/career")}
        >
          <FontAwesomeIcon icon={faBriefcase} color="var(--color-icon-muted)" />
        </a>
        <a
          href="#paper-shelf"
          className={`paper-shelf-link${isActive("/paper-shelf") ? " active" : ""}`}
          onClick={(e) => handleNavClick(e, "paper-shelf", "/paper-shelf")}
        >
          <FontAwesomeIcon icon={faBook} color="var(--color-icon-muted)" />
        </a>
        <a
          href="#art-gallery"
          className={`art-gallery-link${isActive("/art-gallery") ? " active" : ""}`}
          onClick={(e) => handleNavClick(e, "art-gallery", "/art-gallery")}
        >
          <FontAwesomeIcon icon={faImages} color="var(--color-icon-muted)" />
        </a>
        <a
          href="#contact"
          className={`contact-link${isActive("/contact") ? " active" : ""}`}
          onClick={(e) => handleNavClick(e, "contact", "/contact")}
        >
          <FontAwesomeIcon icon={faEnvelope} color="var(--color-icon-muted)" />
        </a>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color={"var(--color-accent)"}
          size={"3x"}
          className={"close-icon"}
        />
      </nav>
      <div className="social-chip-anchor">
        <ul className="social-links">
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://linkedin.com/in/ankushchavan"}
            >
              <FontAwesomeIcon icon={faLinkedin} color={"var(--color-icon-muted)"} />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://github.com/cankush625"}
            >
              <FontAwesomeIcon icon={faGithub} color={"var(--color-icon-muted)"} />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://ankush-chavan.medium.com/"}
            >
              <FontAwesomeIcon icon={faMedium} color={"var(--color-icon-muted)"} />
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://twitter.com/TheNameIsAnkush"}
            >
              <FontAwesomeIcon icon={faTwitter} color={"var(--color-icon-muted)"} />
            </a>
          </li>
          {SHOW_INSTAGRAM && (
            <li>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={"https://instagram.com/ankushchavan_"}
              >
                <FontAwesomeIcon icon={faInstagram} color={"var(--color-icon-muted)"} />
              </a>
            </li>
          )}
        </ul>
      </div>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color={"var(--color-accent)"}
        size={"3x"}
        className={"hamburger-icon"}
      />
    </div>
  );
};

export default Sidebar;

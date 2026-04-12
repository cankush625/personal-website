import "./index.scss";
import { Link, NavLink } from "react-router-dom";
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

const Sidebar = ({ isMobile = false }) => {
  const [showNav, setShowNav] = useState(false);

  // On mobile: anchor links that scroll to section; on desktop: router NavLinks
  const navLink = ({ id, to, icon, className, exact }) => {
    if (isMobile) {
      return (
        <a
          href={`#${id}`}
          className={className}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={icon} color="#4d4d4e" />
        </a>
      );
    }
    return (
      <NavLink
        onClick={() => setShowNav(false)}
        exact={exact}
        activeclassname="active"
        className={className}
        to={to}
      >
        <FontAwesomeIcon icon={icon} color="#4d4d4e" />
      </NavLink>
    );
  };

  return (
    <div className="nav-bar">
      {isMobile ? (
        <a className="logo" href="#home">
          <img src={Logo} alt="logo" />
        </a>
      ) : (
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
          {/*<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>*/}
        </Link>
      )}
      <nav className={showNav ? "mobile-show" : ""}>
        {navLink({ id: "home", to: "/", icon: faHome, exact: "true" })}
        {/*Hidden About section because the about section content has been*/}
        {/*moved to home page*/}
        {/*{navLink({ id: "about", to: "/about", icon: faUser, className: "about-link" })}*/}
        {navLink({ id: "skills", to: "/skills", icon: faCogs, className: "skills-link" })}
        {navLink({ id: "career", to: "/career", icon: faBriefcase, className: "career-link" })}
        {navLink({ id: "paper-shelf", to: "/paper-shelf", icon: faBook, className: "paper-shelf-link" })}
        {navLink({ id: "art-gallery", to: "/art-gallery", icon: faImages, className: "art-gallery-link" })}
        {navLink({ id: "contact", to: "/contact", icon: faEnvelope, className: "contact-link" })}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color={"#ffd700"}
          size={"3x"}
          className={"close-icon"}
        />
      </nav>
      <ul className="social-links">
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://linkedin.com/in/ankushchavan"}
          >
            <FontAwesomeIcon icon={faLinkedin} color={"#4d4d4e"} />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://github.com/cankush625"}
          >
            <FontAwesomeIcon icon={faGithub} color={"#4d4d4e"} />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://ankush-chavan.medium.com/"}
          >
            <FontAwesomeIcon icon={faMedium} color={"#4d4d4e"} />
          </a>
        </li>
        <li>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={"https://twitter.com/TheNameIsAnkush"}
          >
            <FontAwesomeIcon icon={faTwitter} color={"#4d4d4e"} />
          </a>
        </li>
        {SHOW_INSTAGRAM && (
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://instagram.com/ankushchavan_"}
            >
              <FontAwesomeIcon icon={faInstagram} color={"#4d4d4e"} />
            </a>
          </li>
        )}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color={"#ffd700"}
        size={"3x"}
        className={"hamburger-icon"}
      />
    </div>
  );
};

export default Sidebar;

import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
// import LogoSubtitle from "../../assets/images/logo_subtitle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        {/*<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>*/}
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color={"#ffd700"}
          size={"3x"}
          className={"close-icon"}
        />
      </nav>
      <ul className={showNav ? "mobile-show" : ""}>
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

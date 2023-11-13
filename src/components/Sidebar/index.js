import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
// import LogoSubtitle from "../../assets/images/logo_subtitle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
      {/*<img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle"/>*/}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
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
  </div>
);

export default Sidebar;

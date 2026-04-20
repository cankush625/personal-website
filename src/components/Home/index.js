import LogoTitle from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["n", "k", "u", "s", "h"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const currentYear = new Date().getFullYear();
  const firstProgrammedYear = 2016;
  const firstProfessionalProgrammingYear = 2021;

  return (
    <div className={"container home-page"}>
      <div className={"text-zone"}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt={"Logo of the website (Ankush Chavan)"} />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <div className="role-chips">
          <span className="role-chip">Backend Engineer</span>
          <span className="role-chip">Tech Blogger</span>
          <span className="role-chip">Artist</span>
        </div>
        <div className={"about-text-zone"}>
          <p>
            Senior <span className={"standout-text"}>Backend Engineer</span> at
            MaxIQ, working across Backend, Cloud, ML, DevOps, and Security. I
            contribute to open-source and write technical articles on Medium.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">
                {currentYear - firstProgrammedYear}
              </span>
              <span className="hero-stat-label">years coding</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">
                {currentYear - firstProfessionalProgrammingYear}
              </span>
              <span className="hero-stat-label">years professional</span>
            </div>
          </div>
        </div>
        <Link to={"/contact"} className={"flat-button"}>
          Contact Me
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;

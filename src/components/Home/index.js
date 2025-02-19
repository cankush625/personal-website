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
        <h2>Backend Engineer / Tech Blogger / Artist</h2>
        <div className={"about-text-zone"}>
          <p>
            I'm a skilled{" "}
            <span className={"standout-text"}>Software Engineer</span> with a
            strong interest in cutting-edge technologies such as Blockchain,
            Hybrid-Multi Cloud, Machine Learning, DevOps, Cloud Computing, and
            Security. Currently, I work as a Senior Backend Engineer at Gyaan AI.
          </p>
          <p>
            As a tech enthusiast, I take pleasure in learning and incorporating
            new technologies into my work.
            <br />I have programmed for <span className={"standout-text"}>
              {currentYear - firstProgrammedYear}
            </span>{" "}
            years, <span className={"standout-text"}>
              {currentYear - firstProfessionalProgrammingYear}
            </span> professionally.
          </p>
          <p>
            Apart from my work, I actively contribute to open-source projects and
            write technical articles on Medium.
          </p>
        </div>
        <Link to={"/contact"} className={"flat-button"}>
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;

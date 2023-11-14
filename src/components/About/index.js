import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faGolang,
  faAws,
  faGit,
  faDocker,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className={"container about-page"}>
      <div className={"text-zone"}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I'm a skilled{" "}
          <span className={"standout-text"}>Software Engineer</span> with a
          strong interest in cutting-edge technologies such as Blockchain,
          Hybrid-Multi Cloud, Machine Learning, DevOps, Cloud Computing, and
          Security. Currently, I work as a Backend Engineer at Velotio
          Technologies, Pune.
        </p>
        <p>
          As a tech enthusiast, I take pleasure in learning and incorporating
          new technologies into my work.
          <br />I have programmed for <span className={"standout-text"}>
            8
          </span>{" "}
          years,{" "}
          <span className={"standout-text"}>2</span> professionally.
        </p>
        <p>
          Apart from my work, I actively contribute to open-source projects and
          write technical articles on Medium.
        </p>
      </div>
      <div className={"stage-cube-cont"}>
        <div className={"cubespinner"}>
          <div className={"face1"}>
            <FontAwesomeIcon icon={faPython} color={"#2aa712"} />
          </div>
          <div className={"face2"}>
            <FontAwesomeIcon icon={faLinux} color={"#be6e1b"} />
          </div>
          <div className={"face3"}>
            <FontAwesomeIcon icon={faAws} color={"#dcc41c"} />
          </div>
          <div className={"face4"}>
            <FontAwesomeIcon icon={faDocker} color={"#0148ab"} />
          </div>
          <div className={"face5"}>
            <FontAwesomeIcon icon={faGit} color={"#f32828"} />
          </div>
          <div className={"face6"}>
            <FontAwesomeIcon icon={faGolang} color={"#24f1f1"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

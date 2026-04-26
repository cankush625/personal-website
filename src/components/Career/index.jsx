import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import EngineeringCollegeLogo from "../../assets/images/career/engineering_college_logo.png";
import PhoenixgenSystemsLogo from "../../assets/images/career/phoenixgen_systems_logo.png";
import VelotioLogo from "../../assets/images/career/velotio_logo.svg";
import MaxIQLogo from "../../assets/images/career/getmaxiq_logo.png";

const Career = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = [
    "C", "a", "r", "e", "e", "r", " ", "T", "i", "m", "e", "l", "i", "n", "e",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <Helmet>
      <title>Career | Ankush Chavan</title>
      <meta name="description" content="Ankush Chavan's professional career timeline — software engineering roles at MaxIQ, Velotio Technologies, Phoenixgen Systems, and academic background." />
      <meta property="og:title" content="Career | Ankush Chavan" />
      <meta property="og:description" content="Ankush Chavan's professional career timeline — software engineering roles at MaxIQ, Velotio Technologies, Phoenixgen Systems, and academic background." />
      <meta property="og:url" content="https://ankushchavan.com/career" />
    </Helmet>
    <div className={"container career-page"}>
      <h1 className={"page-title"}>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={titleArray}
          idx={15}
        />
      </h1>
      <div className={"career-timeline"}>

        {/* Item 0: MaxIQ — even → card on right */}
        <div className="career-timeline-item flex">
          {!isMobile && <div className="flex-1 pr-4 py-3" />}
          <div className="flex flex-col items-center">
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
            <div className="active-dot rounded-full border-2 p-1.5 flex items-center justify-center" style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-bg-dot)", boxShadow: "none" }}>
              <img src={MaxIQLogo} alt="maxiq logo" className={"timeline-dot-image"} />
            </div>
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
          </div>
          <div className="flex-1 flex items-center pl-4 py-3">
            <div className={"timeline-entry-card"}>
              <span className={"position-title"}>Senior Software Engineer</span>
              <span className={"position-company"}>MaxIQ, Pune</span>
              <span className={"position-extra"}>Previously known as Gyaan AI</span>
              <span className={"date-pill"}>November 2023 - Present</span>
            </div>
          </div>
        </div>

        {/* Item 1: Velotio SE — odd → card on left */}
        <div className="career-timeline-item flex">
          {!isMobile && (
            <div className="flex-1 flex items-center justify-end pr-4 py-3">
              <div className={"timeline-entry-card"}>
                <span className={"position-title"}>Software Engineer</span>
                <span className={"position-company"}>Velotio Technologies, Pune</span>
                <span className={"date-pill"}>March 2022 - November 2023</span>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center">
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
            <div className="rounded-full border-2 p-1.5 flex items-center justify-center" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-dot)", boxShadow: "none" }}>
              <img src={VelotioLogo} alt="velotio logo" className={"timeline-dot-image"} />
            </div>
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
          </div>
          <div className="flex-1 flex items-center pl-4 py-3">
            {isMobile && (
              <div className={"timeline-entry-card"}>
                <span className={"position-title"}>Software Engineer</span>
                <span className={"position-company"}>Velotio Technologies, Pune</span>
                <span className={"date-pill"}>March 2022 - November 2023</span>
              </div>
            )}
          </div>
        </div>

        {/* Item 2: Velotio ASE — even → card on right */}
        <div className="career-timeline-item flex">
          {!isMobile && <div className="flex-1 pr-4 py-3" />}
          <div className="flex flex-col items-center">
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
            <div className="rounded-full border-2 p-1.5 flex items-center justify-center" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-dot)", boxShadow: "none" }}>
              <img src={VelotioLogo} alt="velotio logo" className={"timeline-dot-image"} />
            </div>
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
          </div>
          <div className="flex-1 flex items-center pl-4 py-3">
            <div className={"timeline-entry-card"}>
              <span className={"position-title"}>Associate Software Engineer</span>
              <span className={"position-company"}>Velotio Technologies, Pune</span>
              <span className={"date-pill"}>July 2021 - March 2022</span>
            </div>
          </div>
        </div>

        {/* Item 3: Phoenixgen — odd → card on left */}
        <div className="career-timeline-item flex">
          {!isMobile && (
            <div className="flex-1 flex items-center justify-end pr-4 py-3">
              <div className={"timeline-entry-card"}>
                <span className={"position-title"}>SDE Intern</span>
                <span className={"position-company"}>Phoenixgen Systems</span>
                <span className={"date-pill"}>April 2020 - October 2020</span>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center">
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
            <div className="rounded-full border-2 p-1.5 flex items-center justify-center" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-dot)", boxShadow: "none" }}>
              <img src={PhoenixgenSystemsLogo} alt="phoenixgen systems logo" className={"timeline-dot-image"} />
            </div>
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
          </div>
          <div className="flex-1 flex items-center pl-4 py-3">
            {isMobile && (
              <div className={"timeline-entry-card"}>
                <span className={"position-title"}>SDE Intern</span>
                <span className={"position-company"}>Phoenixgen Systems</span>
                <span className={"date-pill"}>April 2020 - October 2020</span>
              </div>
            )}
          </div>
        </div>

        {/* Item 4: College — even → card on right, last item */}
        <div className="career-timeline-item flex">
          {!isMobile && <div className="flex-1 pr-4 py-3" />}
          <div className="flex flex-col items-center">
            <div className="career-timeline-connector w-0.5 flex-1" style={{ backgroundColor: "var(--color-border)" }} />
            <div className="rounded-full border-2 p-1.5 flex items-center justify-center" style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-bg-dot)", boxShadow: "none" }}>
              <img src={EngineeringCollegeLogo} alt="engineering college logo" className={"timeline-dot-image"} />
            </div>
            <div className={"fading-timeline-connector career-timeline-connector w-0.5 flex-1"} />
          </div>
          <div className="flex-1 flex items-center pl-4 py-3">
            <div className={"timeline-entry-card"}>
              <span className={"position-title"}>B. Tech (Computer Engineering)</span>
              <span className={"position-company"}>G. H. Raisoni College of Engineering and Management, Pune</span>
              <span className={"date-pill"}>2017 - 2021</span>
              <span className={"position-extra"}>CGPA: 9.61</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Career;

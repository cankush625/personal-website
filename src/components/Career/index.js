import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import EngineeringCollegeLogo from "../../assets/images/career/engineering_college_logo.png";
import PhoenixgenSystemsLogo from "../../assets/images/career/phoenixgen_systems_logo.png";
import VelotioLogo from "../../assets/images/career/velotio_logo.svg";
import MaxIQLogo from "../../assets/images/career/getmaxiq_logo.png";

const dotSx = {
  borderColor: "var(--color-border)",
  bgcolor: "var(--color-bg-dot)",
  boxShadow: "none",
  padding: "6px",
};

const activeDotSx = {
  borderColor: "var(--color-accent)",
  bgcolor: "var(--color-bg-dot)",
  boxShadow: "none",
  padding: "6px",
};

const connectorSx = { bgcolor: "var(--color-border)" };

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
    <div className={"container career-page"}>
      <h1 className={"page-title"}>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={titleArray}
          idx={15}
        />
      </h1>
      <div className={"career-timeline"}>
        <Timeline position={isMobile ? "right" : "alternate"}>
          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
              <TimelineDot variant="outlined" className={"active-dot"} sx={activeDotSx}>
                <img src={MaxIQLogo} alt="maxiq logo" className={"timeline-dot-image"} />
              </TimelineDot>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div className={"timeline-entry-card"}>
                <Typography variant="h6" component="span" className={"position-title"}>
                  Senior Software Engineer
                </Typography>
                <Typography variant="body2" className={"position-company"}>
                  MaxIQ, Pune
                </Typography>
                <Typography variant="body2" className={"position-extra"}>
                  Previously known as Gyaan AI
                </Typography>
                <span className={"date-pill"}>November 2023 - Present</span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="h6"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
              <TimelineDot variant="outlined" sx={dotSx}>
                <img src={VelotioLogo} alt="velotio logo" className={"timeline-dot-image"} />
              </TimelineDot>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div className={"timeline-entry-card"}>
                <Typography variant="h6" component="span" className={"position-title"}>
                  Software Engineer
                </Typography>
                <Typography variant="body2" className={"position-company"}>
                  Velotio Technologies, Pune
                </Typography>
                <span className={"date-pill"}>March 2022 - November 2023</span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
              <TimelineDot variant="outlined" sx={dotSx}>
                <img src={VelotioLogo} alt="velotio logo" className={"timeline-dot-image"} />
              </TimelineDot>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div className={"timeline-entry-card"}>
                <Typography variant="h6" component="span" className={"position-title"}>
                  Associate Software Engineer
                </Typography>
                <Typography variant="body2" className={"position-company"}>
                  Velotio Technologies, Pune
                </Typography>
                <span className={"date-pill"}>July 2021 - March 2022</span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
              <TimelineDot variant="outlined" sx={dotSx}>
                <img src={PhoenixgenSystemsLogo} alt="phoenixgen systems logo" className={"timeline-dot-image"} />
              </TimelineDot>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div className={"timeline-entry-card"}>
                <Typography variant="h6" component="span" className={"position-title"}>
                  SDE Intern
                </Typography>
                <Typography variant="body2" className={"position-company"}>
                  Phoenixgen Systems
                </Typography>
                <span className={"date-pill"}>April 2020 - October 2020</span>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={connectorSx} className={"career-timeline-connector"} />
              <TimelineDot variant="outlined" sx={dotSx}>
                <img src={EngineeringCollegeLogo} alt="engineering college logo" className={"timeline-dot-image"} />
              </TimelineDot>
              <TimelineConnector
                sx={connectorSx}
                className={"fading-timeline-connector career-timeline-connector"}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div className={"timeline-entry-card"}>
                <Typography variant="h6" component="span" className={"position-title"}>
                  B. Tech (Computer Engineering)
                </Typography>
                <Typography variant="body2" className={"position-company"}>
                  G. H. Raisoni College of Engineering and Management, Pune
                </Typography>
                <span className={"date-pill"}>2017 - 2021</span>
                <Typography variant="body2" className={"position-extra"}>
                  CGPA: 9.61
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Career;

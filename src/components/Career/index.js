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
import GyaanAILogo from "../../assets/images/career/gyaan_logo.png";

const Career = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const titleArray = [
    "C",
    "a",
    "r",
    "e",
    "e",
    "r",
    " ",
    "T",
    "i",
    "m",
    "e",
    "l",
    "i",
    "n",
    "e",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
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
        <Timeline position="alternate">
          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
              <TimelineDot color="primary" variant="outlined">
                <img
                  src={GyaanAILogo}
                  alt="gyaan logo"
                  className={"timeline-dot-image"}
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h5"
                component="span"
                className={"position-title"}
              >
                Senior Software Engineer
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                Gyaan AI, Pune
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                November 2023 - Present
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className={"career-timeline-item"}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="h6"
              color="gray"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
              <TimelineDot color="primary" variant="outlined">
                <img
                  src={VelotioLogo}
                  alt="velotio logo"
                  className={"timeline-dot-image"}
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h5"
                component="span"
                className={"position-title"}
              >
                Software Engineer
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                Velotio Technologies, Pune
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                March 2022 - November 2023
              </Typography>
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
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
              <TimelineDot color="primary" variant="outlined">
                <img
                  src={VelotioLogo}
                  alt="velotio logo"
                  className={"timeline-dot-image"}
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h5"
                component="span"
                className={"position-title"}
              >
                Associate Software Engineer
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                Velotio Technologies, Pune
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                July 2021 - March 2022
              </Typography>
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
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
              <TimelineDot color="primary" variant="outlined">
                <img
                  src={PhoenixgenSystemsLogo}
                  alt="phoenixgen systems logo"
                  className={"timeline-dot-image"}
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h5"
                component="span"
                className={"position-title"}
              >
                SDE Intern
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                Phoenixgen Systems
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                April 2020 - October 2020
              </Typography>
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
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={"career-timeline-connector"}
              />
              <TimelineDot color="primary" variant="outlined">
                <img
                  src={EngineeringCollegeLogo}
                  alt="engineering college logo"
                  className={"timeline-dot-image"}
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ bgcolor: "#ffd700" }}
                className={
                  "fading-timeline-connector career-timeline-connector"
                }
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h5"
                component="span"
                className={"position-title"}
              >
                B. Tech (Computer Engineering)
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                G. H. Raisoni College of Engineering and Management, Pune
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                2017 - 2021
              </Typography>
              <Typography variant="h6" className={"position-details"}>
                CGPA: 9.61
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Career;

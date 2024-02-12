import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/MIKI SHIBABAW ESHETIE cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Basic Programming Language "
              date="October 2019 - June 2020"
              content={[
                "I have a strong foundation in programming, starting with languages like C++",
                " I excelled in C++ and achieved an A+ grade.",
              ]}
            />
            <Resumecontent
              title="Desktop Application"
              date="June 2020 - April 2021"
              content={[
                " I expanded my skills by learning C#, Java, and developing desktop applications..",
                "Build Hospital information system which has servel feature.",
              ]}
            />
            <h3 className="resume-title">Website Application</h3>
            <Resumecontent
              title="Diving into Real developer"
              date="April 2020 - present"
              content={[
                "I began my journey in website and application development in 2020 when I learned the fundamentals of HTML, CSS, and JavaScript. In that year, I developed a strong foundation in front-end development, allowing me to create visually appealing and user-friendly websites.",
              ]}
            />
            <Resumecontent
              title="Full stack Dev"
              date="Sep 2020 - present"
              content={[
                "I expanded my skills with React.js for frontend and Firebase, Node.js, Django for backend. Built dynamic and interactive interfaces. Leveraged Firebase for data storage and real-time updates. Excited to explore new technologies.",
              ]}
            />
            <Resumecontent
              title="Mobile application Dev"
              date="Sep 2020 - present"
              content={[
                "I Started with React Native for mobile app development, then shifted to Flutter for its native performance and stunning interfaces. Built cross-platform apps for iOS and Android. Excited to explore new technologies and push the boundaries of mobile app development.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information Systems "
              date="2019 - 2023"
              content={[
                `CGPA: 3.85`,
                "I was complete my bachelor degree from Universiry of Gondar Institute of Technology.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `I stood first in my Department and graduate in a very distiniction status.`,
                `I Develop unique AI based application in 2023.`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

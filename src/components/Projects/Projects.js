import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import kegebeta from "../../Assets/Projects/Kegebeta.PNG";
import ethiovisit from "../../Assets/Projects/Ethiovisit.PNG";
import chatapp from "../../Assets/Projects/ChatApp.PNG";

import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          You can Browse my recent works.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kegebeta}
              isBlog={false}
              title="Kegebeta Food delivery"
              description="Kegebeta brings together a curated selection of
               renowned Ethiopian restaurants and eateries, offering a diverse
                range of delicious dishes. From the iconic injera and flavorful stews
                 to the tantalizing spices of traditional Ethiopian spices, Kegebeta has 
                 something to please every palate.

              "
              link="https://github.com/amexyegondar/KegebetaFoodDelivery"
              liveLink="https://kegebeta-food-delivery-rg92.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethiovisit}
              isBlog={false}
              title="EthioVisit"
              description=' your ultimate travel companion for exploring the beautiful landscapes and rich cultural heritage of Ethiopia. 
              Our user-friendly website interface is designed to make your travel planning experience seamless and enjoyable.'
              link="https://github.com/amexyegondar/ethiovisit"
              liveLink="https://ethiovisit-exploreabyssinia.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="chatapp"
              description="Stay connected with your contacts through private one-on-one chats or create group chats to bring your community together. EthioChat ensures your 
              conversations are secure and encrypted, providing a safe space for you to connect and share."
              link="https://github.com/amexyegondar/ReactChatWebsite"
              liveLink=''
            />
          </Col>

         

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

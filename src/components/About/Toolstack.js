import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 
  SiVisualstudiocode,

} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiAnaconda } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
    </Row>
  );
}

export default Toolstack;

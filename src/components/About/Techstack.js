import React from 'react'
import {Col, Row} from 'react-bootstrap'

import { MdHtml } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaGit } from 'react-icons/fa';
import {
  SiTensorflow,
  SiFirebase,

  SiFlutter,
  
  SiDjango 
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <MdHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  )
}

export default Techstack

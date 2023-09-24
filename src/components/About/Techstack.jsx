import React from "react";
import { Col, Row } from "react-bootstrap";


import html from "../../Assets/techlogo/html.svg"
import css from "../../Assets/techlogo/css.svg"
import javascript from "../../Assets/techlogo/javascript.svg"
import mongodb from "../../Assets/techlogo/mongoDB.svg"
import node from "../../Assets/techlogo/node.svg"
import react from "../../Assets/techlogo/react.svg"
import redux from "../../Assets/techlogo/redux.svg"
import typescript from "../../Assets/techlogo/typescript.svg"
import express from "../../Assets/techlogo/express.svg"
import nextjs from "../../Assets/techlogo/nextjs.svg"


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} alt="html" className="tech-images"/>
        <h4>HTML</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={css} alt="css" className="tech-images"/>
        <h4>CSS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={javascript} alt="js" className="tech-images"/>
        <h4>JAVASCRIPT</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

      <img src={react} alt="react" className="tech-images"/>
        <h4>REACT</h4>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={typescript} alt="ts" className="tech-images"/>
        <h4>TYPESCRIPT</h4>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={redux} alt="redux" className="tech-images"/>
        <h4>REDUX</h4>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={nextjs} alt="mongo" className="tech-images"/>
        <h4>NEXT JS</h4>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={node} alt="node" className="tech-images"/>
        <h4>NODE JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mongodb} alt="mongo" className="tech-images"/>
        <h4>MONGO DB</h4>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={express} alt="mongo" className="tech-images"/>
        <h4>EXPRESS JS</h4>

      </Col>

      
      
    </Row>
  );
}

export default Techstack;

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
import bootstrap from "../../Assets/techlogo/bootstrap.png"

function Techstack() {
  return (
    <div className="stacks" >
      <Col xs={4} md={2} className="tech-icons" >
        <img src={html} alt="html" className="tech-images"/>
        <h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={css} alt="css" className="tech-images"/>
        <h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={javascript} alt="js" className="tech-images"/>
        <h6>JAVASCRIPT</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

      <img src={react} alt="react" className="tech-images"/>
        <h6>REACT</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={typescript} alt="ts" className="tech-images"/>
        <h6>TYPESCRIPT</h6>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bootstrap} alt="bootstrap" style={{aspectRatio:"3/2",objectFit:"contain"}} className="tech-images"/>
        <h6>BOOTSTRAP</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={nextjs} alt="mongo" className="tech-images"/>
        <h6>NEXT JS</h6>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={node} alt="node" className="tech-images"/>
        <h6>NODE JS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mongodb} alt="mongo" className="tech-images"/>
        <h6>MONGO DB</h6>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src={express} alt="mongo" className="tech-images"/>
        <h6>EXPRESS JS</h6>

      </Col>

      
      
    </div>
  );
}

export default Techstack;

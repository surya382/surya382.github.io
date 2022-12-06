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



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} alt="html" width="100%" height="200px"/>
        <h4>HTML</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src={css} alt="css" width="100%" height="200px"/>
        <h4>CSS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={javascript} alt="js" width="100%" height="200px"/>
        <h4>JAVASCRIPT</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

      <img src={react} alt="react" width="100%" height="200px"/>
        <h4>REACT</h4>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={typescript} alt="ts" width="100%" height="200px"/>
        <h4>TYPESCRIPT</h4>
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={redux} alt="redux" width="100%" height="200px"/>
        <h4>REDUX</h4>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={node} alt="node" width="100%" height="200px"/>
        <h4>NODE JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mongodb} alt="mongo" width="100%" height="200px"/>
        <h4>MONGO DB</h4>

      </Col>
      
    </Row>
  );
}

export default Techstack;

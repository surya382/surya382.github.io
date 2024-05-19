import React from "react";
import { Container } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";




function About() {
  return (
    <Container fluid className="about-section" id="scskills">
     
      <Container>
       
        <h1 className="project-heading" style={{marginBottom:"25px"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        {/* <Github/> */}      
      </Container>
    </Container>
  );
}

export default About;

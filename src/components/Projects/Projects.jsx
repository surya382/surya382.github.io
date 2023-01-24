import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import modesens from "../../Assets/Projects/modesens.png";
import jcrew from "../../Assets/Projects/jcrew.png";
import bonsai from "../../Assets/Projects/bonsai.png";
import nyresa from "../../Assets/Projects/nyresa.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modesens}
              
              title="Modesens.com (Clone)"
              description="A website that deals with the sale of fashion and
              lifestyle products online to various part of India."

              stacks="HTML | CSS | JAVASCRIPT"
              ghLink="https://github.com/surya382/nutty-dinner-4204"
              demoLink="https://dainty-begonia-81897f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jcrew}
              
              title="Jcrew.com (Clone)"
              description="A E-Commerce website that deals with the sale
              of fashion goods and has sorting and filtering functionalities
              "
              stacks="HTML | CSS | JAVASCRIPT"
              ghLink="https://github.com/surya382/rude-jam-2167"
              demoLink="https://gleeful-crisp-1a6f51.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonsai}
              
              title="Bonsai.com (Clone)"
              description="A website that is dedicated to helping companies
              and independent talent work better together.
              "
              stacks="REACT JS | CHAKRA UI"
              ghLink="https://github.com/surya382/subdued-neck-2197"
              demoLink="https://heartfelt-boba-41e001.netlify.app/"              
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyresa}
              
              title="Mytheresa.com (Clone)"
              description="It is an e-commerce website where users can buy products such as clothings,
               apparels etc. It is a collaborative project. 
              "
              stacks="REACT JS | CHAKRA UI | REDUX"
              ghLink="https://github.com/himanshudestiny/numerous-governor-3295"
              demoLink="https://numerous-governor-3295.netlify.app/"              
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

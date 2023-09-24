import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import modesens from "../../Assets/Projects/modesens.png";
import jcrew from "../../Assets/Projects/jcrew.png";
import bonsai from "../../Assets/Projects/bonsai.png";
import nyresa from "../../Assets/Projects/nyresa.png"
import huddlecam from "../../Assets/Projects/huddlecam.png"
import snapdeal from "../../Assets/Projects/snapdeal.png"
import heybartender from "../../Assets/Projects/heybartender.png"



function Projects() {
  return (
    <Container fluid className="project-section" id="scproj">
      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4}  className="project-card">
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

          <Col md={4}  className="project-card">
            <ProjectCard
              imgPath={jcrew}
              
              title="Jcrew.com (Clone)"
              description="A E-Commerce website that deals with the sale
              of fashion goods and has sorting and filtering functionalities
              "
              stacks="HTML | CSS | JAVASCRIPT"
              ghLink="https://github.com/surya382/rude-jam-2167"
              demoLink="https://frolicking-khapse-19d58f.netlify.app/"
            />
          </Col>

          <Col md={4}  className="project-card">
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
          

          <Col md={4}  className="project-card">
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

          <Col md={4}  className="project-card">
            <ProjectCard
              imgPath={snapdeal}
              
              title="Snapdeal.com (Clone)"
              description="A Full-stack web application for buying clothes and other accessories." 
              
              stacks="REACT JS | CHAKRA UI | NODE JS | EXPRESS JS | MONGO DB "
              ghLink="https://github.com/Maalikq/inexpensive-cause-3321"
              demoLink="https://grabdeal.vercel.app/"              
            />
          </Col>

          <Col md={4}  className="project-card">
            <ProjectCard
              imgPath={huddlecam}
              
              title="Huddlecam"
              description="HuddleCam is a video calling app where users can do video calling, 
              chatting on texts, add todos and a lot more. 
              "
              stacks="REACT JS | CHAKRA UI | NODE JS | SOCKET-IO | EXPRESS JS "
              ghLink="https://github.com/himanshudestiny/HuddleCam"
              demoLink="https://frontend-oh5pidb6p-himanshudestiny.vercel.app/"              
            />
          </Col>

          <Col md={4}  className="project-card">
            <ProjectCard
              imgPath={heybartender}
              
              title="Hey bartender!"
              description="A full-stack web application build to help bartenders and recently graduated bartending students."
              stacks="REACT JS | CHAKRA UI | NODE JS | MONGO DB | EXPRESS JS "
              ghLink="https://github.com/surya382/heybartender"
              demoLink="https://jazzy-stardust-9e8f6b.netlify.app/"              
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

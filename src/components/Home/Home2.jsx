import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prof.jpeg";

import pdf from "../../Assets/../Assets/Rahul_Suryawanshi_Resume.pdf";

import Button from "react-bootstrap/Button";


import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO <span className="purple"> I'AM </span>
            </h1>

            

            <p className="home-about-body">

            <p>
            Hi Everyone, I am <span className="purple">Rahul Suryawanshi </span>
            from <span className="purple"> Satara, Maharashtra.</span>
            
          </p>

            A full-stack web developer trained by Masai School, Bengaluru.
             I have a passion to create useful projects and systems which can contribute in everyone's wellbeing.
              I go to full extent in execution.
            </p>

            <div style={{textAlign:"left"}}>
            <Button
                      
            variant="primary"
            className="butt"
            
            href={pdf}
            target="_blank"
            style={{ maxWidth: "100px" }}
          >
            
            Resume
          </Button>
             
          </div>


          </Col>


          
          <Col md={4} className="myAvtar">
            
              <img src={myImg} style={{borderRadius:"100%",height:"300px",width:"250px"}} className="img-fluid" alt="avatar" />
            
          </Col>

          

        </Row>
                      
        

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me On</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/surya382"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahul-suryawanshi-31519821b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="schome">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rahul Suryawanshi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <About/>
       
       <Projects/>

       {/* <Contacts/> */}
    </section>
  );
}

export default Home;

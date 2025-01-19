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

  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/18_4tMaFzOdKjmOrcVCsWR0cx_YLFXImO/view?usp=share_link"
    );
  };

  return (
    <Container fluid className="home-about-section" id="schome2">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2em" }}>
            WHO <span className="purple"> I'AM </span>
          </h1>
          <Col md={8} className="home-about-description pt-0">
            <p className="home-about-body">

              <p>
                Hi Everyone, I am <span className="purple">Rahul Suryawanshi </span>
                from <span className="purple"> Satara, Maharashtra.</span>

              </p>
              I am an experienced Full Stack Web Developer working in a dynamic,
              product-based startup environment. A graduate of Masai School,
              Bengaluru, I have hands-on experience in developing scalable,
              performance-driven web applications. My expertise spans modern web technologies,
              including HTML, CSS, JavaScript, React.js, and Next.js on the front-end, and Node.js,
              Express.js, TypeScript, MongoDB, and SQL on the back-end.
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>


              <a
                style={{ textDecoration: "none" }}
                href={pdf}
                download={true}
                target={"_blank"}
                rel="noreferrer"
                onClick={downloadResume}
              >
                <Button
                  className="resbut"
                  variant="primary"

                  style={{ maxWidth: "100px",borderRadius:"4px",padding:"0px 10px"}}
                >
                  Resume
                </Button>
              </a>


              <ul>
                <li className="social-icons" style={{ paddingLeft: "0px" }}>
                  <a
                    href="https://github.com/surya382"
                    style={{ color: "teal" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size="18px" />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/rahul-suryawanshi-31519821b/"
                    style={{ color: "teal" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size="18px" />
                  </a>
                </li>

              </ul>

            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} style={{ borderRadius: "100%", height: "250px", width: "250px" }} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;

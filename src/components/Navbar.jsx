import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdf from "../Assets/../Assets/Rahul_Suryawanshi_Resume.pdf";

import Button from "react-bootstrap/Button";







function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const downloadResume = async () => {
    window.open(
      "https://drive.google.com/file/d/18_4tMaFzOdKjmOrcVCsWR0cx_YLFXImO/view?usp=share_link"
    );
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="https://st2.depositphotos.com/5943796/11433/v/450/depositphotos_114331868-stock-illustration-initial-letter-rs-red-swoosh.jpg" style={{borderRadius:"20px"}} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link  onClick={() => scrollToFunction("schome")}>
                 Home
              </Nav.Link>

              
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
              
                onClick={() => scrollToFunction("schome2")}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                
                onClick={() => scrollToFunction("scproj")}
              >
                {" "}
                Projects
              </Nav.Link>
            </Nav.Item>

           


            <Nav.Item>
              <Nav.Link
               
                onClick={() => scrollToFunction("scskills")}
              >
                {" "}
                Skills
              </Nav.Link>
            </Nav.Item>
             
            <Nav.Item>
              <Nav.Link
                
                onClick={() => scrollToFunction("sccontact")}
              >
                {" "}
                Contacts
              </Nav.Link>
            </Nav.Item>

           <div style={{marginTop:"5px",marginLeft:"15px"}}>
            
           
                      <a
            style={{textDecoration:"none"}}
            href={pdf}
            download={true}
            target={"_blank"}
            rel="noreferrer"
            onClick={downloadResume} 
          >
            <Button
                      className="resbut"
                      variant="primary"
                     
                      style={{ maxWidth: "100px" }}
                    >
            Resume 
            </Button>
          </a>
                    
            
           </div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

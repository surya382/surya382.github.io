
import { FiAtSign, FiPhone, FiMapPin } from "react-icons/fi";

import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"




function Contacts() {



  return (

    <div className="project-heading " id="sccontact">
      <h1 >Contact <strong className="purple">Me </strong></h1>

      <Container style={{ marginTop: "20px", border: "1px solid teal", borderRadius: "10px" }}>
        <Row>

          <a className="tags" href="mailto:suryawanshirahul382@gmail.com/" target="_blank" rel="noopener noreferrer">
            <Image width="27px" src="https://www.pngitem.com/pimgs/m/46-463734_gmail-logo-black-white-hd-png-download.png" alt="Gmail" className="mr-3" />
            <p>suryawanshirahul382@gmail.com</p>
          </a>

          <a className="tags" href="https://github.com/surya382" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/material-rounded/24/000000/github.png" alt="Github" className="mr-3" />
            <p >Github</p>
          </a>

          <a className="tags" href="tel:8169145094" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/material-rounded/24/000000/phone--v1.png" alt="Phone" className="mr-3" />
            <p >+91 8169145094</p>
          </a>
          <a className="tags" href="https://www.linkedin.com/in/rahul-suryawanshi-31519821b/" target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/material-rounded/24/000000/linkedin.png" alt="LinkedIn" />
            <p >Linkedin</p>
          </a>


        </Row>
      </Container>








    </div>




  )
}

export default Contacts;

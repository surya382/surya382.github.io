import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/../Assets/Rahul_Suryawanshi_Resume.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const resumeLink =
  "http://localhost:3000/static/media/Rahul_Suryawanshi_Resume.05f7920d114cfa907fd9.pdf";

function ResumeNew() {
 

  return (
    <div>
      <Container fluid className="resume-section">
        
        

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center" >
            <Page pageNumber={1}  />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            
            Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

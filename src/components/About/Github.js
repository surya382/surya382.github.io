import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import {Image} from "@chakra-ui/react"

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" ,marginTop:"30px"}}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong className="purple">Calendar</strong>
      </h1>

      <GitHubCalendar
        username="surya382"
        blockSize={15}
        blockMargin={5}
        color="#0c7d8a"
        fontSize={16}
      />



   <h1 className="project-heading" style={{ paddingBottom: "20px",marginTop:"100px" }}>
        Github <strong className="purple">Stats</strong>
      </h1>
       <Image width="80%"  src="https://github-readme-stats.vercel.app/api?username=surya382&count_private=true"/>
    </Row>
  );
}

export default Github;

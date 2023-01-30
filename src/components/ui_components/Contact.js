import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Links } from "../style_components/StyledComponents";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <p
            className="subtitle mt-5 text-center"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            We can get in touch here!
          </p>
          <Col
            className="d-flex justify-content-center pt-5 mt-5 pb-5 mb-5"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <Links href="https://github.com/lucky7xx">
              <GitHubIcon sx={{ fontSize: "50px", color: "black" }} />
            </Links>
            <Links href="https://www.linkedin.com/in/lucky-patel-b285a4138/">
              <LinkedInIcon sx={{ fontSize: "50px", color: "black" }} />
            </Links>
            <Links href="https://twitter.com/notsolucky7x_">
              <TwitterIcon sx={{ fontSize: "50px", color: "black" }} />
            </Links>
            <Links href="https://facebook.com/lucky7ex">
              <FacebookIcon sx={{ fontSize: "50px", color: "black" }} />
            </Links>
            <Links href="https://imstagram.com/lucky7x_">
              <InstagramIcon sx={{ fontSize: "50px", color: "black" }} />
            </Links>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

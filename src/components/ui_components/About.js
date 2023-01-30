import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { aboutDetails } from "../dynamic_data/Details";

const About = () => {
  return (
    <div id="about" className="h-100">
      <Container className="h-100">
        <Row>
          <Col
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img src={aboutDetails.image} />
          </Col>
          <Col
            className="mt-5"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="name_title h1 ">{aboutDetails.name}</p>
            <p className="subtitle mt-3">{aboutDetails.position}</p>
            <p className="h4 ">{aboutDetails.about}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

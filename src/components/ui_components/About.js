import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { aboutDetails } from "../dynamic_data/Details";

const About = () => {
  return (
    <div id="about" className="h-100">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={6}
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img className="img-fluid" src={aboutDetails.image} alt="about" />
          </Col>
          <Col
            sm={6}
            className="mt-2 mt-sm-5"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="name_title h1 ">{aboutDetails.name}</p>
            <p className="subtitle mt-0 mt-sm-3">{aboutDetails.position}</p>
            <p className="h4 ">{aboutDetails.about}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

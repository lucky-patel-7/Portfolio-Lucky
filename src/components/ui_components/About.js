import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../../images/avatar.png";

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
            <img src={avatar} />
          </Col>
          <Col
            className="mt-5"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="name_title h1 ">Hi, I am Lucky!</p>
            <p className="subtitle mt-3">
              Developer & <br /> Designer
            </p>
            <p className="h4 ">
              designing stunning user interfaces is my passion, and bringing
              them to life with code is my superpower.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import intro from "../../images/intro.png";

const Introduction = () => {
  return (
    <div>
      <Container className="h-100">
        <Row className="mt-5 pt-5 mb-5 pb-5">
          <Col
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className=" subtitle mt-5">Intro</p>
            <p className="h5 mt-3 lh-base introduction_details">
              Passionate about learning and developing new skills, I am
              dedicated to creating meaningful projects that make a positive
              impact. With a focus on design and coding, I am committed to
              building high-quality products and bringing them to life. Driven
              by a fast-paced, collaborative environment, I am motivated to work
              with my team to continuously ship, learn, and iterate. My strong
              communication and problem-solving abilities allow me to
              effectively contribute to any project, and I am excited to learn
              and grow alongside my team. When not working, I enjoy spending
              time at the gym, reading, traveling, and exploring the great
              outdoors. Let's create something amazing together!
            </p>
          </Col>
          <Col
            className="mt-5"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img src={intro} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;

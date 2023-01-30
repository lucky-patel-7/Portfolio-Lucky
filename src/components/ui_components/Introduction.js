import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import intro from "../../images/intro.png";
import { introDetails } from "../dynamic_data/Details";

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
            <p className=" subtitle mt-5">{introDetails.title}</p>
            <p className="h5 mt-3 lh-base introduction_details">
              {introDetails.text}
            </p>
          </Col>
          <Col
            className="mt-5"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img src={introDetails.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;

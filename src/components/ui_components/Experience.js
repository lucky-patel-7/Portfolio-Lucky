import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardComponent from "./../style_components/CardComponent";
import silvertouchlogo from "../../images/silvertouchlogo.png";
import welteclogo from "../../images/welteclogo.png";
import {
  experienceDetails,
  experienceCardComponentDetails,
} from "./../dynamic_data/Details";

const Experience = () => {
  return (
    <div id="experience">
      <Container className="h-100">
        <Row className="mt-5 pt-5 mb-5 pb-5">
          <p
            className=" subtitle mt-5 text-center"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            {experienceDetails.title}
          </p>
          <Col
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="subtitle h1 mt-5">{experienceDetails.subtitle}</p>
            <p className="h5 ">{experienceDetails.sub_subtitle}</p>
          </Col>
          <Col
            className="d-flex mt-5"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            {experienceCardComponentDetails.map((data) => (
              <CardComponent
                key={data.id}
                companyLogo={data.companyLogo}
                companyName={data.companyName}
                position={data.position}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;

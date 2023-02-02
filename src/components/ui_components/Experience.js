import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "./../style_components/CardComponent";
import {
  experienceDetails,
  experienceCardComponentDetails,
} from "./../dynamic_data/Details";

const Experience = () => {
  return (
    <div id="experience" className="h-100">
      <Container>
        <Row
          className="mt-2  pt-2 mb-2 pb-2 mt-sm-5 pt-sm-5 mb-sm-5 pb-sm-5"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-mirror="true"
        >
          <p className=" subtitle mt-5 text-center">
            {experienceDetails.title}
          </p>
          <Col
            sm={6}
            xs={12}
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <Col className="">
              <p className="lh-base subtitle h1 mt-2 mt-sm-5 ">
                {experienceDetails.subtitle}
              </p>
              <p className="h5 sub_subtitle">
                {experienceDetails.sub_subtitle}
              </p>
            </Col>
          </Col>
          <Col
            sm={6}
            xs={12}
            className="d-flex mt-5"
            data-aos="flip-down"
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

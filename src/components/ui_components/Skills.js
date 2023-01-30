import React from "react";
import ImageComponent from "./../style_components/ImageComponent";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { skillsData } from "../dynamic_data/Details";
const Skills = () => {
  return (
    <div id="skills">
      <Container className="h-100">
        <Row className="mt-5 pt-5 mb-5 pb-5 ">
          <Col>
            <p
              className="subtitle mt-5 text-center"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-mirror="true"
            >
              What I Know!
            </p>

            <div
              className="col d-flex justify-content-center mt-5 mb-5 pt-5 pb-5"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
            >
              {skillsData.map((skill) => (
                <ImageComponent key={skill.id} languageIcon={skill.image} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

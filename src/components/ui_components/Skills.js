import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import node from "../../images/node.png";
import jquery from "../../images/jquery.png";
import bootstrap from "../../images/bootstrap.png";
import tailwind from "../../images/tailwind.png";
import ImageComponent from "./../style_components/ImageComponent";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

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
              <ImageComponent languageIcon={html} />
              <ImageComponent languageIcon={css} />
              <ImageComponent languageIcon={js} />
              <ImageComponent languageIcon={react} />
              <ImageComponent languageIcon={node} />
              <ImageComponent languageIcon={jquery} />
              <ImageComponent languageIcon={bootstrap} />
              <ImageComponent languageIcon={tailwind} />
              <ImageComponent languageIcon={jquery} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

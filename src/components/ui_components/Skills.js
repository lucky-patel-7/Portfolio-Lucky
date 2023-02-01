import React from "react";
import ImageComponent from "./../style_components/ImageComponent";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { skillsData, skillsProgressBarData } from "../dynamic_data/Details";
import SkillProgressBar from "./../subcomponents/SkillsProgressBar";

const Skills = (props) => {
  return (
    <div id="skills" className="h-100">
      <Container>
        <Row>
          <Col
            xs={12}
            className="mt-1 mb-1  pt-1 pb-1 mt-sm-4 mb-sm-4 pt-sm-4 mb-sm-4 pb-sm-4 text-center"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="subtitle mt-2">What I Know!</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="mt-1 mb-1 mt-sm-1 mb-sm-1 pt-1 pb-1  pt-sm-1 mb-sm-5 pb-sm-5 text-center"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <div className="d-flex flex-wrap justify-content-center ">
              {skillsData.map((skill) => (
                <ImageComponent key={skill.id} languageIcon={skill.image} />
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          {skillsProgressBarData.map(({ name, percent }) => (
            <SkillProgressBar
              key={name}
              skill={name}
              percent={percent}
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-mirror="true"
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

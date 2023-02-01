import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { introDetails } from "../dynamic_data/Details";

const Introduction = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/u/0/uc?id=1ZSnaV9DhW-0MU1xmiHJ7tVKEDwWCcGUR&export=download";
    link.download = introDetails.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="intro" className="h-100">
      <Container>
        <Row className="mt-sm-5 pt-sm-5 mb-sm-5 pb-sm-5 mt-2 pt-2 mb-2 pb-2">
          <Col
            sm={6}
            xs={12}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="subtitle mt-0 mt-sm-5">{introDetails.title}</p>
            <p className="h5 mt-3  lh-base introduction_details">
              {introDetails.text}
            </p>
            <Col xs={12} className="d-flex justify-content-center">
              <Button
                style={{
                  backgroundColor: "#8EBCED",
                  color: "black",
                  border: "none",
                }}
                onClick={handleDownload}
              >
                Download-Resume
              </Button>
            </Col>
          </Col>
          <Col
            sm={6}
            xs={12}
            className="mt-5"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <img className="img-fluid" src={introDetails.image} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;

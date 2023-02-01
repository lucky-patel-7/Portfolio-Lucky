import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Links } from "../style_components/StyledComponents";
import { socialLinks, contactData } from "./../dynamic_data/Details";
import ContactUsForm from "./../subcomponents/ContactUsForm";

const Contact = () => {
  return (
    <div id="contact" className="h-100">
      <Container>
        <Row className="text-center">
          <Col
            xs={12}
            className="mt-sm-5 mt-5 pt-sm-5 pt-1 pb-0 pb-sm-5"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="subtitle mt-5">{contactData.title}</p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={9}
            sm={11}
            className="d-flex justify-content-center mt-1 mt-sm-1 mb-sm-5   pb-4 pb-sm-4"
          >
            {socialLinks.map((link) => (
              <Links key={link.id} href={link.url}>
                <link.icon
                  sx={{ fontSize: "60px", color: "black" }}
                  className="mt-4 sm-mt-2 contact-icons"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                  data-aos-mirror="true"
                />
              </Links>
            ))}
          </Col>
        </Row>
        <ContactUsForm />
      </Container>
    </div>
  );
};

export default Contact;

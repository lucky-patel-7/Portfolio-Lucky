import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Links } from "../style_components/StyledComponents";
import { socialLinks } from "./../dynamic_data/Details";

const Contact = () => {
  return (
    // <div id="contact">
    //   <Container>
    //     <Row>
    //       <p
    //         className="subtitle mt-5 text-center"
    //         data-aos="flip-down"
    //         data-aos-duration="1000"
    //         data-aos-mirror="true"
    //       >
    //         We can get in touch here!
    //       </p>
    //       <Col
    //         className="d-flex justify-content-center pt-5 mt-5 pb-5 mb-5"
    //         data-aos="flip-up"
    //         data-aos-duration="1000"
    //         data-aos-mirror="true"
    //       >
    //         {socialLinks.map((link) => (
    //           <Links key={link.id} href={link.url}>
    //             <link.icon sx={{ fontSize: "50px", color: "black" }} />
    //           </Links>
    //         ))}
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <div id="contact">
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <p
              className="subtitle mt-5"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-mirror="true"
            >
              We can get in touch here!
            </p>
          </Col>
        </Row>
        <Row className="pt-5 mt-5 pb-5 mb-5">
          <Col xs={12} className="d-flex justify-content-center">
            {socialLinks.map((link) => (
              <Links key={link.id} href={link.url}>
                <link.icon sx={{ fontSize: "50px", color: "black" }} />
              </Links>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

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
          <Col
            xs={12}
            className="mt-sm-5 mt-5 pt-sm-5 pt-1 pb-0 pb-sm-5"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-mirror="true"
          >
            <p className="subtitle mt-5">We can get in touch here!</p>
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
                />
              </Links>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

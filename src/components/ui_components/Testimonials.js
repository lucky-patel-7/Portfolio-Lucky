import React from "react";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { testimonialsData } from "../dynamic_data/Details";

const Testimonials = () => {
  return (
    <>
      <div className="h-100">
        <Container>
          <Col>
            <p
              className="subtitle mt-5"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-mirror="true"
            >
              Testimonials
            </p>
          </Col>
          <Col className="d-flex">
            {testimonialsData.map((testimonial, index) => (
              <Card
                style={{ width: "18rem" }}
                key={index}
                className="ml-3 testimonial-card"
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-mirror="true"
              >
                <Card.Body>
                  <Row>
                    <Col xs={4}>
                      <Image
                        src={testimonial.image}
                        rounded
                        style={{ width: "60px", height: "60px" }}
                      />
                    </Col>
                    <Col className="ml-5">
                      <Card.Title>{testimonial.name}</Card.Title>
                      <Card.Text className="ml-5">
                        {testimonial.review}
                      </Card.Text>
                      <div className=" justify-content-start mt-3">
                        {[...Array(5)].map((star, index) =>
                          index < testimonial.rating ? (
                            <FontAwesomeIcon icon={faStar} key={index} />
                          ) : (
                            <FontAwesomeIcon
                              icon={faStar}
                              className="text-muted"
                              key={index}
                            />
                          )
                        )}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;

import React from "react";
import "../../styles/hero.css";
import { Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <section className="hero__container">
      <Container>
        <Row>
          <Col lg='12'> 
            <h2>
            Her Tarif, Bir Hikaye <br /> Yöresel Mutfağın Gizemli Dünyası
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

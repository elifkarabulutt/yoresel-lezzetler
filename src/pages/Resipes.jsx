import React from "react";

import { Col, Container, Row } from "reactstrap";

import Hero from "../components/UI/Hero";
import Content from "../components/UI/Content";
import RecipeList from "../components/UI/RecipeList";
import Helmet from "../components/Helmet/Helmet";

const Resipes = () => {
  return (
    <Helmet title='Tarifler'>
      <section>
        <Hero />
        <Content />
        <Container>
          <Row className="content__wrapper">
            <Col lg="12">
              <div className="content__title mt-5">
                <h2>Son tarifler</h2>
              </div>
            </Col>
            <Col>
              <RecipeList />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Resipes;

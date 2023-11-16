import React from "react";

import { Col, Container, Row } from "reactstrap";

import ContentList from "../../components/UI/ContentList";

const Content = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12 mt-5">
            <div className="content__title mt-5">
              <h2>En çok aranan tarifler</h2>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="content__wrapper">
        <Row>
          <ContentList />
        </Row>
      </Container>
    </section>
  );
};

export default Content;

import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import cities from "../assets/data/cities";

const Citys = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Şehirler</h2>
      <Row>
        {cities.map((city, index) => (
          <Col key={city.id} md={4} className={index % 3 === 0 ? "mb-4" : "mb-4 mb-md-0"}>
            <Link to={`/citys/${city.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <CardImg top width="100%" src={city.imgUrl} alt={city.name} />
                <CardBody>
                  <CardTitle tag="h5">{city.name}</CardTitle>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Citys;

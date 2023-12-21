import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Helmet } from "react-helmet";
import recipes from "../assets/data/recipes";
import cities from "../assets/data/cities";

const CityDetails = () => {
  const { id } = useParams();
  const city = cities.find((city) => city.id === parseInt(id));
  const cityRecipes = recipes.filter((recipe) => recipe.cityId === parseInt(id));

  return (
    <div>
      <Helmet>
        <title>{`${city.name} Mutfağı Tarifleri`}</title>
      </Helmet>
      <Container className="recipes__container">
        <h2 className="text-center mb-4">{city.name} Mutfağı Tarifleri</h2>
        <Row>
          {cityRecipes.map((recipe) => (
            <Col key={recipe.id} md={4} className="mb-4">
              <Link to={`/recipe-details/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card>
                  <CardImg top width="100%" src={recipe.imgUrl} alt={recipe.recipeName} />
                  <CardBody>
                    <CardTitle tag="h5">{recipe.recipeName}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CityDetails;
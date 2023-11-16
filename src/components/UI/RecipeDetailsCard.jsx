import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../../assets/data/recipes";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet";

const RecipeDetailsCard = () => {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === id);

  return (
    <Helmet title={`Tarifler - ${recipe.recipeName}`}>
      <Container className="recipes__container">
        <Row>
          <Col lg="10">
            <h6>Malzemeler</h6>
          </Col>
          <Col lg="10">
            <ul>
              {recipe.ingredients.map((step, id) => (
                <li key={id}>{step}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <h6>Hazırlık aşaması</h6>
          </Col>
          <Col lg="10">
            <ol>
              {recipe.preparation.map((step, id) => (
                <li key={id}>{step}</li>
              ))}
            </ol>
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <h6>Ek bilgi</h6>
          </Col>
          <Col lg="10">
            <p>{recipe.additionalInfo}</p>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default RecipeDetailsCard;

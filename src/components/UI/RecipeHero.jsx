import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import recipes from "../../assets/data/recipes";

const RecipeHero = () => {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === id);
  return (
    <section className="hero__container">
      <Container>
        <Row>
          <Col lg="12">
            <h2>{recipe.recipeName}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecipeHero;

import React from "react";
import "../styles/recipesDetails.css";
import RecipeDetailsCard from "../components/UI/RecipeDetailsCard";
import RecipeHero from "../components/UI/RecipeHero";

const RecipeDetails = () => {
  return (
    <>
      <RecipeHero />
      <RecipeDetailsCard />
    </>
  );
};

export default RecipeDetails;

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Resipes";
import About from "../pages/About";
import RecipeDetails from "../pages/RecipeDetails";
import RecipeList from "../components/UI/RecipeList";

const Routers = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:id" element={<RecipeDetails />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Routers;

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Resipes";
import About from "../pages/About";
import RecipeDetails from "../pages/RecipeDetails";
import RecipeList from "../components/UI/RecipeList";
import Citys from "../pages/Citys"; 
import CityDetails from "../pages/CityDetails";
import CityDetailsCard from "../pages/CityDetailsCard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
      <Route path="recipes/:id" element={<RecipeDetails />} />
      <Route path="about" element={<About />} />
      <Route path="citys" element={<Citys />} /> 
      <Route path="/recipe-details/:recipeId" component={<CityDetailsCard/>} />
      <Route path="citys/:id" element={<CityDetails />} />
    </Routes>
  );s
};

export default Routers;

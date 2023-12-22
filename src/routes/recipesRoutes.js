
const express = require('express');
const recipesController = require('../controllers/recipesController');

const router = express.Router();

// Tarifleri getiren endpoint
router.get('/', recipesController.getRecipes);

// Bir tarifin detaylarını getiren endpoint
router.get('/:id', recipesController.getRecipeDetails);

module.exports = router;



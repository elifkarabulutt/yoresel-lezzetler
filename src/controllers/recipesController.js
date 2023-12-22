// recipesModel dosyasındaki koldarı yazdıktan sonra
//const recipesModel = require('../models/recipesModel');

const getRecipes = async (req, res) => {
  try {
    // PostgreSQL bağlantı nesnesini kullan
    const recipes = await getRecipes(req.pool);
    res.json(recipes);
  } catch (error) {
    console.error('Error in recipesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getRecipeDetails = async (req, res) => {
  const recipeId = req.params.id;

  try {
    // PostgreSQL bağlantı nesnesini kullan
    const recipeDetails = await getRecipeDetails(req.pool, recipeId);
    res.json(recipeDetails);
  } catch (error) {
    console.error('Error in recipesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getRecipes, getRecipeDetails };







/*
const getRecipes = async (req, res) => {
    try {
      const recipes = await recipesModel.getRecipes();
      res.render('recipes', { recipes });
    } catch (error) {
      console.error('Error in recipesController:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/

/*
// üsttekiydi önce, bu sql i bağladıktan sonra
const getRecipes = async (req, res) => {
  try {
    // PostgreSQL bağlantı nesnesini kullan
    const result = await req.pool.query('SELECT * FROM recipes');
    res.json(result.rows);
  } catch (error) {
    console.error('Error in recipesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// alttaki ve üstteski kod benzer. ama bu yazdığım daha iyi sanki
const getRecipeDetails = async (req, res) => {
    const recipeId = req.params.id;
  
    try {
      const recipeDetails = await recipesModel.getRecipeDetails(recipeId);
      res.render('recipeDetails', recipeDetails);
    } catch (error) {
      console.error('Error in recipesController:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/


/*
//önce üsttekini yazdım. alltaki sql bağlantısından sonra
const getRecipeDetails = async (req, res) => {
  const recipeId = req.params.id;

  try {
    // PostgreSQL bağlantı nesnesini kullan
    const recipeResult = await req.pool.query('SELECT * FROM recipes WHERE recipe_id = $1', [recipeId]);
    const ingredientsResult = await req.pool.query('SELECT * FROM recipeingredients WHERE recipe_id = $1', [recipeId]);
    const stepsResult = await req.pool.query('SELECT * FROM steps WHERE recipe_id = $1', [recipeId]);
    const commentsResult = await req.pool.query('SELECT * FROM comments WHERE recipe_id = $1', [recipeId]);

    const recipe = recipeResult.rows[0];
    const ingredients = ingredientsResult.rows;
    const steps = stepsResult.rows;
    const comments = commentsResult.rows;

    res.json({ recipe, ingredients, steps, comments });
  } catch (error) {
    console.error('Error in recipesController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { getRecipes, getRecipeDetails };
*/



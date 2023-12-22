// try catch olmadan

const getRecipes = async (pool) => {
  const result = await pool.query('SELECT * FROM recipes');
  return result.rows;
};

const getRecipeDetails = async (pool, recipeId) => {
  const recipeResult = await pool.query('SELECT * FROM recipes WHERE recipe_id = $1', [recipeId]);
  const ingredientsResult = await pool.query('SELECT * FROM recipeingredients WHERE recipe_id = $1', [recipeId]);
  const stepsResult = await pool.query('SELECT * FROM steps WHERE recipe_id = $1', [recipeId]);
  const commentsResult = await pool.query('SELECT * FROM comments WHERE recipe_id = $1', [recipeId]);

  const recipe = recipeResult.rows[0];
  const ingredients = ingredientsResult.rows;
  const steps = stepsResult.rows;
  const comments = commentsResult.rows;

  return { recipe, ingredients, steps, comments };
};

module.exports = { getRecipes, getRecipeDetails };











/*
const getRecipes = async () => {
  try {
    const result = await pool.query('SELECT * FROM recipes');
    return result.rows;
  } catch (error) {
    console.error('Error fetching recipes', error);
    throw error;
  }
};

const getRecipeDetails = async (recipeId) => {
  try {
    const recipeResult = await pool.query('SELECT * FROM recipes WHERE recipe_id = $1', [recipeId]);
    const ingredientsResult = await pool.query('SELECT * FROM recipeingredients WHERE recipe_id = $1', [recipeId]);
    const stepsResult = await pool.query('SELECT * FROM steps WHERE recipe_id = $1', [recipeId]);
    const commentsResult = await pool.query('SELECT * FROM comments WHERE recipe_id = $1', [recipeId]);

    const recipe = recipeResult.rows[0];
    const ingredients = ingredientsResult.rows;
    const steps = stepsResult.rows;
    const comments = commentsResult.rows;

    return { recipe, ingredients, steps, comments };
  } catch (error) {
    console.error('Error fetching recipe details', error);
    throw error;
  }
};

module.exports = { getRecipes, getRecipeDetails };
*/

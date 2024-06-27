import { Router } from "express";
import { deleteRecipes, getRecipe, getRecipes, patchRecipes, postRecipes } from "../controllers/recipe.js";

//create a router
const recipeRouter = Router();



// Define routes
//the trycatch will avoid the app from crashing.It is a better way of handling errors and gives a more 'productive' feedback
recipeRouter.get('/recipes', getRecipes);



recipeRouter.post('/recipes', postRecipes);



recipeRouter.patch('/recipes/:id', patchRecipes);



recipeRouter.delete('/recipes/:id', deleteRecipes);



recipeRouter.get('/recipes/:id', getRecipe);


//Export routes
export default recipeRouter;
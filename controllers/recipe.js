import { RecipeModel } from "../models/recipe.js";



//Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
          //Get all recipes from database
          const allRecipes = await RecipeModel.find()
          //Return all recipes as response
          res.json(allRecipes);
    } catch (error) { 
    }
   }



   //Post all recipes
   export const postRecipes = async (req, res, next) => {
    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        //return response       
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}


//Patch Recipes

export const patchRecipes = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} Updated`);
}


//Delete Recipes
export const deleteRecipes = async (req, res, next) => {
    try {
        //Delete recipe by ID
        const deleteRecipes = await RecipeModel.findByIdAndDelete(req.params.id);
        //Return response
        res.json(deleteRecipes);
    } catch (error) {
    next(error)  
    }
}



//Get specific ID Recipes
export const getRecipe = (req, res) => {
    res.json(`Recipe with ID ${req.params.id} received`);
}
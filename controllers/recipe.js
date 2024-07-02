import { RecipeModel } from "../models/recipe.js";



//Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
        //Get query params 
        const { limit, skip, search } = req.query;   //filter
        //Get all recipes from database
        const allRecipes = await RecipeModel
            .find({ name: search })                  //filter
            .limit(limit) //limit (limit|| 10)defaults the limit to ten
            .skip(skip)
        //Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
    }
};



//Post all recipes
export const postRecipes = async (req, res, next) => {
    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create(
            {
                ...req.body,
                Image: req.file.filename
            });
        //return response       
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}


//Patch Recipes

export const patchRecipes = async (req, res, next) => {
    try {
        //Update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        //Return response
        res.json(updatedRecipe)
    } catch (error) {
        next(error);

    }
}


// export const patchRecipes = (req, res) => {
//     res.json(`Recipe with ID ${req.params.id} Updated`);
// }



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
// export const getRecipe = (req, res) => {
//     res.json(`Recipe with ID ${req.params.id} received`);
// }


export const getRecipe = async (req, res, next) => {
    try {
        //Get a recipe by id
        const getNewRecipe = await RecipeModel.findById(req.params.id)
        //Return response
        res.json(getNewRecipe);
    } catch (error) {
        next(error)

    }
}
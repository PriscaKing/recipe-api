import { RecipeModel } from "../models/recipe.js";



//Get all recipes
export const getRecipes = async (req, res, next) => {
    try {
    //Get query params
    const{limit,skip,filter}= 
    req.query;
        //Get all recipes from database
        const allRecipes = await RecipeModel
        .find(filter)
        .limit(limit)
        .skip(skip);
            
        //Return all recipes as response
        res.status(200).json(allRecipes);
    } catch (error) {
        next(error);
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
        res.status(200).json(newRecipe);
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
import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

    //create a router
const recipeRouter =Router();

// Define routes
recipeRouter.get('/recipes',(req, res)=>{
    res.json('All recipes');
});

recipeRouter.post('/recipes',async (req, res)=>{
    //Add recipe to database
    await RecipeModel.create(req.body);
    //return response
    res.json("Recipe added");
});

recipeRouter.patch('/recipes/:id',(req, res)=>{
    res.json(`Recipe with ID ${req.params.id} Updated`);
});

recipeRouter.delete('/recipes/:id',(req, res)=>{
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID ${req.params.id} received`)
})

//Export routes
export default recipeRouter;
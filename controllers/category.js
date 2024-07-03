import { CategoryModel } from "../models/category.js";


export const getCategories = async (req, res, next) => {
    try {
        //Get query params 
        const { 
            limit = 10, 
            skip = 0,  
            filter = "{}", 
            fields = "{}",
            sort = '{}'
         } = req.query;   //filter



        //Get all categories from database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))                  //filter
            .limit(limit) //limit (limit|| 10)defaults the limit to ten
            .skip(skip);
        //Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}


export const postCategory = async (req, res, next) => {
    try {
        //Add category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        //Return the response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);

    }

}
import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import multer from "multer";
import { localUpload } from "../middlewares/upload.js";

//create upload middleware
//This middleware should not be used on the guest
const upload = multer({dest: 'uploads'});


//create a router
const categoryRouter = Router();


//Define routes
categoryRouter.get('/categories', getCategories);


categoryRouter.post('/categories', localUpload.single('image'), postCategory);

//Express router

export default categoryRouter;
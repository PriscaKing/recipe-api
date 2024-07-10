import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import multer from "multer";
import { localUpload, remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";


//create upload middleware
//This middleware should not be used on the guest
// const upload = multer({dest: 'uploads'});


//create a router
const categoryRouter = Router();


//Apply middleware



//Define routes
categoryRouter.get('/categories',checkUserSession, getCategories);


//Defining a remote upload
categoryRouter.post('/categories',checkUserSession, remoteUpload.single('image'), postCategory);

//Express router

export default categoryRouter;
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import recipeRouter from "./route/recipe.js";
import categoryRouter from "./route/category.js";
import userRouter from "./route/user.js";


//Connect to database
await mongoose.connect(process.env.MONGO_URL)


//Create Express App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
})


//Apply middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //   cookie: { secure: true }
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL
    })
}));


//Use routes
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('api-docs/'));




// app.patch('/payment',(req, res) =>{
//    res.json('Payment Received');
// })

// app.delete('/services',(req, res)=>{
// res.json('Currently not available');
// });


//Listen for incoming requests 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});



import express from "express"; 
import mongoose from "mongoose";
import recipeRouter from "./route/recipe.js";
import categoryRouter from "./route/category.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL)


//Create Express App 
const app = express();


//Apply middlewares
app.use(express.json());


//Use routes
app.use(recipeRouter);
app.use(categoryRouter);


app.patch('/payment',(req, res) =>{
   res.json('Payment Received');
})


app.delete('/services',(req, res)=>{
res.json('Currently not available');
});

//Listen for incoming requests 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});



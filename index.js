import express from "express"; 
import mongoose from "mongoose";
import recipeRouter from "./route/recipe.js";

//Connect to database
await mongoose.connect(process.env.MONGO_URL)


//Create Express App 
const app = express();


//Apply middlewares
app.use(express.json());


//Define routes
app.get('/',(req,res)=>{
    res.json('Welcome home');
});

app.post('/login', (req, res)=>{
    res.json('Login Successful');
});

//Use routes
app.use(recipeRouter);


app.patch('/payment',(req, res) =>{
   res.json('Payment Received');
})


app.delete('/services',(req, res)=>{
res.json('Currently not available');
});

//Listen for incoming requests 
app.listen(3000, () => {
    console.log('App listening on port 3000')
});



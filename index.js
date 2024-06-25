import express from "express"; 
import recipeRouter from "./route/recipes.js";

//Create Express App 
const app = express();

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

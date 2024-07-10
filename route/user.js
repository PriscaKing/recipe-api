import { Router } from "express";
import { register } from "../controllers/userauth.js";
import { checkUserSession } from "../middlewares/auth.js";

//Create router  
const userRouter = Router();

//Apply Middleware
// userRouter.use(checkUserSession);


//define route
userRouter.post('/register',checkUserSession, register );


//export router   
export default userRouter;


//To avoid a default we commented out the export default on line 13 and added export on line 5.Finally we added curly braces to the {userRouter} in index.json
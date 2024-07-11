import { Router } from "express";
import { login, logout, profile, register } from "../controllers/userauth.js";
import { checkUserSession } from "../middlewares/auth.js";

//Create router  
const userRouter = Router();

//Apply Middleware
// userRouter.use(checkUserSession);


//define route
userRouter.post('/register', register );

userRouter.post('/login', login);

userRouter.post('/logout',checkUserSession, logout);//Do checkUserSession because you cannot logout without logging in

userRouter.get('/profile', checkUserSession, profile);


//export router   
export default userRouter;


//To avoid a default we commented out the export default on line 13 and added export on line 5.Finally we added curly braces to the {userRouter} in index.json
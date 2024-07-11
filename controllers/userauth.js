import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";




export const register = async (req, res, next) => {
    try {
        //hash user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        //create a new user
        await UserModel.create({
            ...req.body,
            password: hashedPassword
        });
//          //Generate a session //This registers and logs them in at the same time.
//      req.session.user = { id: user.id };
//      //Return response
// res.status(200).json('Login successful');
        //Return response
        res.status(201).json('User registered successfully');

    } catch (error) {
        next(error);

    }
}

// export const login = async (req, res, next) => {

//     const { email, password } = req.body; //destructuring meaning you are takong them out of your ...
//     //Find a user using their identifier(username,email,password)

//     const user = await UserModel.findOne({
//         email: email
//     });
//     if (!user) {
//         return res.status(401).json('User not found'); //return is used because there are more codes below uNLess you choose to use 'else'.
//     } 
//         //Verify their password
//     const correctPassword = bcrypt.compareSync(
//         req.body.password, user.password
//     ); //when you use sync we dont use     await.    Makes sure the password is confirmed before the user moves on.
//         if (!correctPassword) {
//             return res.status(401).json('Invalid credentials');
//             } 
//             //Generate a session
//     req.session.user = { id: user.id };
//             //Return response
//     res.status(200).json('Login successful');
    
    
// };


export const login = async (req, res, next) => {

   try {
     const { email,username, password } = req.body; //destructuring meaning you are takong them out of your ...
     //Find a user using their identifier(username,email,password)
 
     const user = await UserModel.findOne({
        $or:[
         {email:email},
         {username:username},
         {phone: phone}
        ]//Database language which is understood as an 'or'
     });
     if (!user) {
         return res.status(401).json('User not found'); //return is used because there are more codes below uNLess you choose to use 'else'.
     } 
         //Verify their password
     const correctPassword = bcrypt.compareSync(
         req.body.password, user.password
     ); //when you use sync we dont use     await.    Makes sure the password is confirmed before the user moves on.
         if (!correctPassword) {
             return res.status(401).json('Invalid credentials');
             } 
             //Generate a session
     req.session.user = { id: user.id };
             //Return response
     res.status(200).json('Login successful');
     
   } catch (error) {
    next(error);
    
   }
    
};



export const logout = async (req, res, next) => {
    try {
        //Destroy user session
        await req.session.destroy();
        //Return response
        res.status(200).json('Logged out successfully');
    } catch (error) {
        
    }
}


export const profile = async (req, res, next) => {
   try {
     //find a user by id
     const user = await UserModel
     .findById(req.session.user.id)
     .select({password:false});
 
     //Return response
     res.status(200).json(user)
   } catch (error) {
    next(error);
   }
   
 }
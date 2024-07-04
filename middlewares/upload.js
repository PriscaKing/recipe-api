import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest: 'uploads'})



//This is an upload middleware in a folder called uploads
//the api key is gotten from savefiles.org on the website
export const remoteUpload = multer({
        storage: multerSaveFilesOrg({
            apiAccessToken: process.env.SAVEFILESORG_API_KEY,
            relativePath:'/uploads/*'
        })
    });
import { model, Schema, Types } from "mongoose";
// import normalize from "normalize-mongoose";
import {toJSON} from "@reis/mongoose-to-json" //new package mongoose-to-json to replace the normalize mongoose


const recipeSchema = new Schema({
    //unique/require is termed validation
    name: { type: String, unique: true, required: true },
    categoryId: { type: Types.ObjectId, ref: 'Category', required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    image: { type: String, required: true },
    favourite:{type:Boolean, default:false}
}, {
    timestamps: true
});

recipeSchema.plugin(toJSON); 

export const RecipeModel = model('Recipe', recipeSchema);
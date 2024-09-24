import wishesModel from "../models/wishesModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const CreateWishService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {productID} = req.body;
        let postJSON = {
            productID: productID,
            userID:user_id
        }
        let data = await wishesModel.updateOne(postJSON,{$set:postJSON}, {upsert: true});
        return {status:"Success",message:"Product added to your wishlist successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const ReadWishListService = async (req)=>{
    try{
        let user_id = new ObjectId(req.headers['user_id']);
        let matchStage = {$match:{userID:user_id}}

        let JoinWithProductStage = {$lookup: {from:"products", localField:"productID", foreignField:"_id", as:"product"}};


        let data = await wishesModel.aggregate([
            matchStage,
            JoinWithProductStage
        ]);
        return {status:"Success",message:"Product read from your wishlist successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const RemoveWishService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {productID} = req.body;
        let postJSON = {
            productID: productID,
            userID:user_id
        }
        let data = await wishesModel.deleteOne(postJSON);
        return {status:"Success",message:"Product removed from your wishlist successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}


import wishesModel from "../models/wishesModel.js";
import mongoose from "mongoose";
import cartsModel from "../models/cartsModel.js";
const ObjectId = mongoose.Types.ObjectId;

export const CreateCartService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {productID, color, qty, size} = req.body;
        let postJSON = {
            productID: productID,
            userID:user_id,
            color:color,
            qty:qty,
            size:size
        }
        await cartsModel.create(postJSON);
        return {status:"Success",message:"Cart added to your cart list successfully"};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const ReadCartListService = async (req)=>{
    try{
        let user_id = new ObjectId(req.headers['user_id']);
        let matchStage = {$match:{userID:user_id}}

        let JoinWithProductStage = {$lookup: {from:"products", localField:"productID", foreignField:"_id", as:"product"}};


        let data = await cartsModel.aggregate([
            matchStage,
            JoinWithProductStage
        ]);
        return {status:"Success",message:"Product read from your wishlist successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const RemoveCartService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {id} = req.body;
        let postJSON = {
            _id: id,
            userID:user_id
        }
        let data = await cartsModel.deleteOne(postJSON);
        return {status:"Success",message:"Product removed from your wishlist successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const UpdateCartService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {color, qty, size, id} = req.body;
        let postJSON = {
            color:color,
            qty:qty,
            size:size
        }
        let data = await cartsModel.updateOne({userID: user_id, _id:id},{$set:postJSON});
        return {status:"Success",message:"Cart list updated successfully", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}
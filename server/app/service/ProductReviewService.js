import reviewsModel from "../models/reviewsModel.js";


export const CreateReviewService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {productID,des, rating} = req.body;
        let postJSON = {
            productID: productID,
            userID:user_id,
            des:des,
            rating:rating
        }
        await reviewsModel.updateOne({userID: user_id, productID:productID},{$set:postJSON},{upsert:true});
        return {status:"Success",message:"Review created successfully"};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const updateReviewService = async (req)=>{
    try{
        let user_id = req.headers['user_id'];
        let {productID, des, rating} = req.body;
        let postJSON = {
            productID: productID,
            userID:user_id,
            des:des,
            rating:rating

        }
        await reviewsModel.updateOne({userID: user_id, productID:productID},{$set:postJSON},{upsert:true});
        return {status:"Success",message:"Review updated successfully"};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}


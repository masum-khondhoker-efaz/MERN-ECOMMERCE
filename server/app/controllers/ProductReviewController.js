import {CreateReviewService, updateReviewService} from "../service/ProductReviewService.js";

export const CreateProductReview=async(req,res)=>{
    let result = await CreateReviewService(req);
    return res.json(result);
}

export const UpdateProductReview=async(req,res)=>{
    let result = await updateReviewService(req);
    return res.json(result);
}


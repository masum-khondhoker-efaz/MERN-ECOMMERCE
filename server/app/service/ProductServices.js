import BrandsModel from "../models/brandsModel.js";
import CategoriesModel from "../models/categoriesModel.js";
import SlidersModel from "../models/slidersModel.js";
import mongoose from "mongoose";

import productsModel from "../models/productsModel.js";

const ObjectId = mongoose.Types.ObjectId;

export const BrandListService = async ()=>{
    try{
        let data = await BrandsModel.find();
        return {status:"Success", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const CategoryListService = async ()=>{
    try{
        let data = await CategoriesModel.find();
        return {status:"Success", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}

export const SliderListService = async ()=>{
    try{
        let data = await SlidersModel.find();
        return {status:"Success", data:data};
    }catch(error){
        return {status:"Failed", data:error.toString()};
    }
}


export const ListByBrandService = async (req)=>{
    try{
        let BrandID = new ObjectId(req.params.BrandID);
        let MatchStage = {$match:{brandID:BrandID}};

        let JoinWithBrandStage = {$lookup: {from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}};

        let JoinWithCategoryStage = {$lookup: {from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}};

        let UnwindBrandStage = {$unwind:"$brand"};
        let UnwindCategoryStage = {$unwind:"$category"};

        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0,'brandID':0}};

        // Query

        let data = await productsModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"Success", data:data};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }

}

export const ListByCategoryService = async (req)=>{
    try{
        let CategoryID = new ObjectId(req.params.CategoryID);
        let MatchStage = {$match:{categoryID:CategoryID}};

        let JoinWithBrandStage = {$lookup: {from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}};

        let JoinWithCategoryStage = {$lookup: {from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}};

        let UnwindBrandStage = {$unwind:"$brand"};
        let UnwindCategoryStage = {$unwind:"$category"};

        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0,'brandID':0}};

        // Query

        let data = await productsModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"Success", data:data};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }
}

export const ListByRemarkService = async (req)=>{
    try {
        let Remark = req.params.Remark;
        let MatchStage = {$match:{remark:Remark}};

        let JoinWithBrandStage = {$lookup: {from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}};

        let JoinWithCategoryStage = {$lookup: {from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}};

        let UnwindBrandStage = {$unwind:"$brand"};
        let UnwindCategoryStage = {$unwind:"$category"};

        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0,'brandID':0}};

        // Query

        let data = await productsModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"Success", data:data};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }

}

export const ListByKeywordService = async ()=>{

}

export const DetailsService = async (req)=>{
    try {
        let ProductID = new ObjectId(req.params.ProductID);
        let MatchStage = {$match:{_id:ProductID}};

        let JoinWithBrandStage = {$lookup: {from:"brands", localField:"brandID", foreignField:"_id", as:"brand"}};
        let JoinWithCategoryStage = {$lookup: {from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}};
        let JoinWithDetailsStage = {$lookup: {from:"productdetails", localField:"_id", foreignField:"productID", as:"details"}};

        let UnwindBrandStage = {$unwind:"$brand"};
        let UnwindCategoryStage = {$unwind:"$category"};
        let UnwindDetailsStage = {$unwind:"$details"};

        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0,'categoryID':0,'brandID':0}};

        // Query

        let data = await productsModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])
        return {status:"Success", data:data};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }
}

export const ReviewListService = async ()=>{

}


import express from "express";
const router = express.Router();

import * as UsersController from "../app/controllers/UsersController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as CategoryController from "../app/controllers/CategoryController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as WishlistController from "../app/controllers/WishlistController.js";




//Users
router.post("/Login", UsersController.Login)
router.post("/VerifyLogin", UsersController.VerifyLogin)
router.post("/CreateUserProfile", UsersController.CreateUserProfile)
router.post("/UpdateUserProfile", UsersController.UpdateUserProfile)
router.get("/ReadUserProfile", UsersController.ReadUserProfile)


//Brands
router.get("/BrandList", BrandController.BrandList)

//Categories
router.get("/CategoryList", CategoryController.CategoryList)

//Cart list
router.post("/CreateCart", CartListController.CreateCart)
router.get("/ReadCartList", CartListController.ReadCartList)
router.post("/UpdateCart", CartListController.UpdateCart)
router.post("/RemoveCart", CartListController.RemoveCart)

//Review list
router.post("/CreateProductReview", ProductController.CreateProductReview)

//Wish list
router.post("/CreateWish", WishlistController.CreateWish)
router.get("/ReadWishList", WishlistController.ReadWishList)
router.post("/RemoveWish", WishlistController.RemoveWish)

//Products
router.get("/ProductListBySlider", ProductController.ProductListBySlider)
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory)
router.get("/ProductDetailsID/:ProductID", ProductController.ProductDetailsID)
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand)
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark)
router.get("/ProductListByKeyword/:Keyword", ProductController.ProductListByKeyword)
router.get("/ProductReviewListByID", ProductController.ProductReviewListByID)






//Invoice
router.post("/CreateInvoice", InvoiceController.CreateInvoice)
router.get("/ReadInvoiceList", InvoiceController.ReadInvoiceList)
router.get("/ReadInvoiceDetails", InvoiceController.ReadInvoiceDetails)



export default router;

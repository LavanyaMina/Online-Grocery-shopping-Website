import express from 'express';
import { isadmin, requiredSignIn } from './../middleware/authMiddleware.js';
import { braintreePaymentController, braintreeTokenController, createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController, 
    productCategoryController, 
    productCountController, 
    productFiltersController, 
    productListController, 
    productPhotoController, 
    relatedProductController, 
    searchProductController, 
    updateProductController } from '../controller/productController.js';
import formidable from 'express-formidable'
const router=express.Router()

router.post('/create-product',requiredSignIn,isadmin,formidable(),createProductController)

router.get('/get-product',getProductController)

router.get('/get-product/:slug',getSingleProductController)

router.get('/product-photo/:pid',productPhotoController)

router.delete('/delete-product/:pid',deleteProductController)

router.post('/product-filters',productFiltersController)

router.put('/update-product/:pid',requiredSignIn,isadmin,formidable(),updateProductController)

router.get('/product-count',productCountController)

router.get('/product-list/:page',productListController)

router.get('/search/:keyword',searchProductController)

router.get('/related-product/:pid/:cid',relatedProductController)

router.get('/product-category/:slug',productCategoryController)

router.get('/braintree/token',braintreeTokenController)

router.post('/braintree/payment',requiredSignIn,braintreePaymentController)

export default router
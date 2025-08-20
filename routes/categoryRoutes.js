import express from 'express';
import { isadmin, requiredSignIn } from './../middleware/authMiddleware.js';
import { categoryControlller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controller/categoryController.js';


const router=express.Router()

router.post('/create-category',requiredSignIn,isadmin,createCategoryController)
router.put('/update-category/:id',requiredSignIn,isadmin,updateCategoryController)
router.get("/get-category", categoryControlller)
router.get("/single-category/:slug", singleCategoryController)
router.delete(
    "/delete-category/:id",
    requiredSignIn,
    isadmin,
    deleteCategoryController
  );
export default router
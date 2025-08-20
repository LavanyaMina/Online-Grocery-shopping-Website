import express from 'express'
import {registerController,loginController,testController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controller/authController.js'
import { isadmin, requiredSignIn } from '../middleware/authMiddleware.js'

const router=express.Router()
router.post('/register',registerController)
router.post('/login',loginController)
router.post('/forgot-password',forgotPasswordController)


router.get('/test',requiredSignIn,isadmin,testController)
router.get('/user-auth',requiredSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
router.get('/admin-auth',requiredSignIn,isadmin,(req,res)=>{
    res.status(200).send({ok:true})
})

router.put('/profile',requiredSignIn,updateProfileController)

router.get('/orders',requiredSignIn,getOrdersController)

router.get('/all-orders',requiredSignIn,isadmin,getAllOrdersController)

router.put(
    "/order-status/:orderId",
    requiredSignIn,
    isadmin,
    orderStatusController
  );
  

  

export default router
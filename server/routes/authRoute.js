import express from 'express'
import {registerController,loginController,testController,forgotPasswordController,updateProfileController,getOrdersController,getAllOrdersController,orderStatusController} from '../controllers/authController.js'
const router=express.Router();
import {isAdmin, requireSignIn} from '../middlewares/authMiddleware.js'



//register a user
router.post('/register',registerController)

//login a user

router.post('/login',loginController)

//forgot password
router.post('/forgot-password',forgotPasswordController)

//test the middleware

router.get('/test',requireSignIn,isAdmin,testController)


//protected route User route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
//protected route Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

//update profile
router.put('/profile',requireSignIn,updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;
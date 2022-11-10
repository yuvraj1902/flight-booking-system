const express=require("express")
const router=express.Router()
const {createUser,checkUser,getSingleUser,getallUsers}=require("../controllers/user.controller")

router.post("/register",createUser)

router.post("/login",checkUser)

router.get("/users",getallUsers)

router.get("/users/:id",getSingleUser)

module.exports=router;
const {createCoupons,getAllCoupons} = require("../controllers/coupon.controller");
const isAdmin=require("../middlewares/isAdmin")
const isSignedIn=require("../middlewares/isSignedIn")
const express = require("express");
const router = express.Router();
router.post("/coupons",isSignedIn,isAdmin, createCoupons);
router.get("/coupons",isSignedIn, getAllCoupons);
module.exports = router;
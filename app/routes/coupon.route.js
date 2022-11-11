const {createCoupons,getAllCoupons,applyCoupons} = require("../controllers/coupon.controller");
const isAdmin=require("../middlewares/isAdmin")
const isSignedIn=require("../middlewares/isSignedIn")
const express = require("express");
const router = express.Router();
router.post("/coupons",isSignedIn,isAdmin, createCoupons);
router.get("/coupons",isSignedIn, getAllCoupons);
router.post("/applycoupons",isSignedIn,applyCoupons);
module.exports = router;
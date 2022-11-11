const {createBookings,getBookingDetails} = require("../controllers/booking.controller");
const  isSignedIn  = require("../middlewares/isSignedIn");
const isAdmin=require('../middlewares/isAdmin')
const express = require("express");
const router = express.Router();


router.post("/bookings",isSignedIn,createBookings);
router.get("/bookings", isSignedIn, getBookingDetails);
module.exports = router;
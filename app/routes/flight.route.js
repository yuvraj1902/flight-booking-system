const {createFlights,getAllFlights,searchFlights} = require("../controllers/flight.controller");
const isAdmin=require("../middlewares/isAdmin")
const isSignedIn=require("../middlewares/isSignedIn")
const express = require("express");
const router = express.Router();
router.post("/flights",isSignedIn,isAdmin, createFlights);
router.get("/flights",isSignedIn,isAdmin, getAllFlights);
router.get("/sflights", isSignedIn, searchFlights);

module.exports = router;
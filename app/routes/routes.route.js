const {createRoutes,getAllRoutes,deleteRoutes} = require("../controllers/routes.controller");
const isAdmin=require("../middlewares/isAdmin")
const isSignedIn=require("../middlewares/isSignedIn")
const express = require("express");
const router = express.Router();
router.post( "/routes",isSignedIn,isAdmin, createRoutes);
router.get("/routes",isSignedIn, getAllRoutes);
router.delete("/routes", isSignedIn,isAdmin, deleteRoutes);

module.exports = router;

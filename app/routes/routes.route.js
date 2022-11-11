const {createRoutes,getAllRoutes,deleteRoutes} = require("../controllers/routes.controller");
const isAdmin=require("../middlewares/isAdmin")
const isSignedIn=require("../middlewares/isSignedIn")
const express = require("express");
const router = express.Router();
router.post( "/routes", createRoutes);
router.get("/routes",isSignedIn,isAdmin, getAllRoutes);
router.delete("/routes",  deleteRoutes);

module.exports = router;

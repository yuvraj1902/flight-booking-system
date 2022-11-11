const {createRoutes,getAllRoutes,deleteRoutes} = require("../controllers/routes.controller");
const express = require("express");
const router = express.Router();
router.post( "/routes", createRoutes);
router.get("/routes", getAllRoutes);
router.delete("/routes",  deleteRoutes);

module.exports = router;

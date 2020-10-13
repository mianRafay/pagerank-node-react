/**
 *
 * Author:  Abdur Rafay
 * Description: NODE js router files
 *
 * */
const express = require("express");
const router = express.Router();

// Add routes path
router.use("/graph", require("./graph"));

module.exports = router;

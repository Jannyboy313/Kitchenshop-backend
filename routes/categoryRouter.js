const CategoryController = require("../controller/categoryController.js");
const express = require('express');

const router = express.Router();

router.get("/categories", CategoryController.getCategories);
router.post("/addcategory", CategoryController.addCategory);
// router.delete("/deletecategory", CategoryController.deleteCategory);

module.exports = router;
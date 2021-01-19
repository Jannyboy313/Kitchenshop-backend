const CategoryController = require("../controller/categoryController.js");
const express = require('express');
const isAuth = require('../middelware/isAuth.js');

const router = express.Router();

router.get("/categories", CategoryController.getCategories);
router.post("/addcategory", isAuth.checkToken, isAuth.admin, CategoryController.addCategory);
router.delete("/deletecategory", isAuth.checkToken, isAuth.admin, CategoryController.deleteCategory);

module.exports = router;
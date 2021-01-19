const productController = require("../controller/productController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/product", productController.getProduct);
router.get("/products", productController.getProducts);
router.post("/addproduct", isAuth.admin, productController.addProduct);
router.put("/updateproduct", isAuth.admin, productController.putProduct);
router.delete("/deleteproduct", isAuth.admin, productController.deleteProduct);

module.exports = router;
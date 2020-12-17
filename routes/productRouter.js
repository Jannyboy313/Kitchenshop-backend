const productController = require("../controller/productController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/product", productController.getProduct);
router.get("/products", productController.getProducts);
router.post("/addproduct", productController.addProduct);
// router.put("/updateproduct", productController.updateProduct);
// router.delete("/deleteproduct", productController.deleteProduct);

module.exports = router;
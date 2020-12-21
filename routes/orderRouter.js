const orderController = require("../controller/orderController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/order", orderController.getOrder);
// router.get("/orders", orderController.getOrders);
// router.get("/addorder", orderController.getOrders);
// router.get("/deleteorder", orderController.getOrders);


module.exports = router;
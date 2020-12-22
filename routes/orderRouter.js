const orderController = require("../controller/orderController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/customerorders", orderController.getCustomerOrders);
router.get("/adminorders", orderController.getAdminOrders);
router.post("/addorders", orderController.addOrders);
// router.get("/deleteorder", orderController.getOrders);


module.exports = router;
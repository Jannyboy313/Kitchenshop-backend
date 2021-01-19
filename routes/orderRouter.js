const orderController = require("../controller/orderController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/customerorders", isAuth.user, orderController.getCustomerOrders);
router.get("/adminorders", isAuth.admin, orderController.getAdminOrders);
router.post("/addorders", isAuth.user, orderController.addOrders);
router.delete("/deleteorder", isAuth.admin, orderController.deleteOrder);


module.exports = router;
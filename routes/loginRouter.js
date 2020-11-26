const loginController = require("../controller/loginController.js");
const express = require('express');

const router = express.Router();

router.post("/login", loginController.getLoginInfo);

module.exports = router;
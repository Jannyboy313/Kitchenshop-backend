const userController = require("../controller/userController.js");
const isAuth = require('../middelware/isAuth.js');

const express = require('express');

const router = express.Router();

router.get("/users",isAuth.checkToken, isAuth.admin, userController.getUsers);
router.delete("/deleteuser", isAuth.checkToken, isAuth.admin, userController.deleteUser);
router.put("/updateuser", isAuth.checkToken, isAuth.admin, userController.putUser)

module.exports = router;
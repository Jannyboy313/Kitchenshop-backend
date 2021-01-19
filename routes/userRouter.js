const userController = require("../controller/userController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/users", isAuth.admin, userController.getUsers);
router.delete("/deleteuser", isAuth.admin, userController.deleteUser);
router.put("/updateuser", isAuth.admin, userController.putUser)

module.exports = router;
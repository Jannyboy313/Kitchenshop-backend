const userController = require("../controller/userController.js");
const isAuth = require('../middelware/isAuth.js');
const express = require('express');

const router = express.Router();

router.get("/users", userController.getUsers);
router.delete("/deleteuser", userController.deleteUser);
router.put("/updateuser", userController.updateUser)

module.exports = router;
const Customer = require('../model/customer.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res) => {
    let reply;
    const email = req.body.email;
    const password = req.body.password;

    try{
        reply = await Customer.findAll()
    } catch(err) {
        res.send(err.message);
        res.end();
    }
    const isValidPass = await bcrypt.compare(password, reply.password)

    if (isValidPass) {
        const token = await jwt.sign({user: reply}, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
        // res.cookie('XRSF-TOKEN', req.csrfToken());
        res.status(200).send({"token": token, "permission": reply.permission});
    } else {
        res.status(404).send("User or Password incorrect");
    }
    res.end()
}

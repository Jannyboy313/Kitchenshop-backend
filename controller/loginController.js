const Customer = require('../model/customer.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res) => {
    let reply;
    const email = req.body.email;
    const password = req.body.password;

    try{
        reply = await Customer.findAll({
            where: {
                email: email,
            }
        })
    } catch(err) {
        res.send(err.message);
        res.end();
    }
    const isValidPass = await bcrypt.compare(password, reply[0].password)
    if (isValidPass) {
        const token = generateAccessToken(reply[0]);
        // res.cookie('XRSF-TOKEN', req.csrfToken());
        res.status(200).send({"token": token, "permission": reply.permission});
    } else {
        res.status(404).send("User or Password incorrect");
    }
    res.end()
}


generateAccessToken = (user) => {
    jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}

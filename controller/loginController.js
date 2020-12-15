const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../model/users.js');
const Address = require('../model/address.js');
const validateUser = require('../helper/validateUser.js');
const validateAddress = require('../helper/validateAddress.js')
const format = require('../helper/format.js');

exports.postLogin = async (req, res) => {
    let reply;
    const email = req.body.email;
    const password = req.body.password;

    try{
        reply = await Users.findAll({
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
        res.status(200).send({"token": token, "permission": reply.permission});
    } else {
        res.status(404).send("Email or Password incorrect");
    }
    res.end()
}

exports.postRegister = async(req, res) => {
    let body = req.body;
    if (!validateUser.validateUser(body.user) && !validateAddress.validateAddres(body.address)) {
        res.status(406).send("Incorrect data send");
        res.end();
    }
    body = format.formatName(body);
    try {
        address = await Address.findOrCreate({
            where: {
                city: body.address.city,
                street_addres: body.address.street_address,
                zipcode: body.address.zipcode
            }
          })
    } catch {
        res.send(err.message);
        res.end();
    }
}

generateAccessToken = (user) => {
    jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}
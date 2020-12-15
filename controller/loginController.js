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
    const hashedPassword = await bcrypt.hash(body.user.password, 12);
    let reply

    if (isDataValid(body)) {
        res.status(406);
        res.end();
        return;
    }

    try {
        address_id = await getAddress_id(body.address);
        reply = await Users.create({
            firstname: body.user.firstname,
            middlename: body.user.middlename,
            lastname: body.user.lastname,
            email: body.user.email,
            password: hashedPassword,
            address_id: address_id
        })
    } catch(err) {
        console.log(err);
        res.send(err);
    }
    res.status(201).send(reply)
}

isDataValid = (body) => {
    if (!validateUser.validateUser(body.user) || !validateAddress.validateAddress(body.address)) {
        return false;
    }
    return true;
}

getAddress_id = async(address) => {
    let reply;
    try {
        reply = await Address.findOrCreate({
            where: {
                city: address.city,
                street_address: address.street_address,
                zipcode: address.zipcode
            }
          })
    } catch(err) {
        console.log(err);
        return null;
    }
    return reply[0].address_id;
}

generateAccessToken = (user) => {
    jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}
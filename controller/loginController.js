const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../model/users.js');
const Address = require('../model/addresses.js');
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
    if (reply.length === 0) {
        res.status(404).send({"error": "Email or Password incorrect"});
        return;
    }
    const isValidPass = await bcrypt.compare(password, reply[0].password)
    if (isValidPass) {
        const token = generateAccessToken(reply[0]);
        reply[0].password = null;
        res.status(200).send({"User": reply[0], "token": token});
    } else {
        res.status(404).send({"error": "Email or Password incorrect"});
    }
    res.end()
}

exports.postRegister = async(req, res) => {
    let body = req.body;
    body.user.password = await bcrypt.hash(body.user.password, 12);
    let createdUser;

    if (!isDataValid(body)) {
        res.status(406).send({"error": "Data is invalid"});
        res.end();
        return;
    }
    body = format.formatRegisterData(body);
    try {
        address_id = await getAddress_id(body.address);
        createdUser = await createUser(body, address_id)
    } catch(err) {
        res.status(406).send({"error": err});
        res.end();
        return;
    }
    if (!createdUser) {
        res.status(406).send({"error": "Email does already exist"});
        res.end()
        return;
    }
    res.status(201).send(createdUser)
    res.end()
}

isDataValid = (body) => {
    const isUserValid = validateUser.isUserDataValid(body.user);
    const isAddressValid = validateAddress.isAddressValid(body.address);
    if (!isUserValid || !isAddressValid) {
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

createUser = async(body, address_id) => {
    let reply;
    try {
        reply = await Users.create({
            firstname: body.user.firstname,
            middlename: body.user.middlename,
            lastname: body.user.lastname,
            email: body.user.email,
            password: body.user.password,
            address_id: address_id
        })
    } catch(err) {
        return false;
    }
    return reply;
}

generateAccessToken = (user) => {
    return jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1800s" });
}
const Users = require('../model/users.js');
const validateUser = require('../helper/validateUser.js');
const format = require('../helper/format.js');

exports.getUsers = async (req, res) => {
    let reply;
    try{
        reply = await Users.findAll({
            attributes: [
                'user_id',
                'firstname',
                'middlename',
                'lastname',
                'email',
                'role'
            ]
        });
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "No users exist"});
        res.end();
        return;
    }
    res.status(200).send(reply[0]);
    res.end();
}

exports.putUser = async (req, res) => {
    const body = req.body;
    let updatedUser;
    if (!isDataValid(body)) {
        res.status(406).send({"error": "Data is invalid"});
        res.end();
        return;
    }

    body = format.formatRegisterData(body);

    try{
        updatedUser = await updateUser(body);
    } catch(err) {
        res.status(409).send({"error": err});
        console.log(err);
    }
    updatedUser.password = null
    res.status(200).send(updatedUser);
    res.end()
}

exports.deleteUser = async (req, res) => {
    const user_id = req.query.user_id;
    try{
        await Users.destroy({
            where: {
                user_id: user_id
            }
        })
    } catch(err) {
        res.status(404).send({"error": err});
        console.log(err);
    }
    res.status(200);
    res.end()
}

isDataValid = (body) => {
    const isUserValid = validateUser.isUserDataValid(body);
    const isNonPersonalValid = validateUser.isRegexNonePersonalValid(body);
    if (!isUserValid || !isNonPersonalValid) {
        return false;
    }
    return true;
}

updateUser = async(user) => {
    let reply;
    try {
        reply = await Users.update({
            firstname: user.firstname,
            middlename: user.middlename,
            lastname: user.lastname,
            email: user.email,
            role: user.role
    }, {where: {user_id: user.user_id}})
    } catch(err) {
        return err;
    }
    return reply;
}
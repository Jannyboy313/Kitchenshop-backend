const Users = require('../model/users.js');

exports.getUsers = async (req, res) => {
    let reply;
    try{
        reply = await Users.findAll();
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
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
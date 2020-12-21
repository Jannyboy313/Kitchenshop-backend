const Orders = require('../model/orders.js');

exports.getCustomerOrders = async (req, res) => {
    let reply;

    try{
        reply = await Orders.findAll({where: {user_id: req.user_id} });
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "No orders exist"});
        res.end();
        return;
    }
    res.status(200).send(reply);
    res.end();
}

exports.getAdminOrders = async (req, res) => {
    let reply;

    try{
        reply = await Orders.findAll();
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "No orders exist"});
        res.end();
        return;
    }
    res.status(200).send(reply);
    res.end();
}
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

exports.addOrders = async (req, res) => {
    const orders = req.body;
    let createdOrders;
    try{
        createdOrders = await createOrders(orders);
    } catch(err) {
        res.status(406).send({"error": err});
        console.log(err);
    }
    res.status(200).send(createdOrders);
    res.end()
}

createOrders = async(orders) => {
    const createdOrders = [];
    let reply;
    try {
        for (let order of orders) {
            reply = await Orders.create({
                user_id: order.user_id,
                productnumber: order.productnumber
            });
            createdOrders.push(reply);
        }
    } catch(err) {
        return err;
    }
    return createdOrders;
}
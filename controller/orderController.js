const Orders = require('../model/orders.js');
const sequelize = require('../db/connection.js');

exports.getCustomerOrders = async (req, res) => {
    let reply;
    try{
        reply = await sequelize.query("SELECT * FROM orders o JOIN products p " +
                                    "ON o.productnumber = p.productnumber " +
                                    "WHERE o.user_id = '" + req.query.user_id + "';");
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
    res.status(200).send(reply[0]);
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

exports.deleteOrder = async (req, res) => {
    const orders_id = req.query.orders_id;
    try{
        await Orders.destroy({
            where: {
                orders_id: orders_id
            }
        })
    } catch(err) {
        res.status(404).send({"error": err});
        console.log(err);
    }
    res.status(200);
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
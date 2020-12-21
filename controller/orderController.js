const Orders = require('../model/orders.js');

exports.getOrder = async (req, res) => {
    let orders_id = req.query.orders_id;
    let reply;

    try{
        reply = await Orders.findOne({
            where: {
                orders_id: orders_id
            }
        })
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "Order not found"});
        res.end()
        return;
    }
    res.status(200).send(reply);
    res.end()
}
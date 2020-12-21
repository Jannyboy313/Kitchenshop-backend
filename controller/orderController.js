exports.getOrder = async (req, res) => {
    let orderid = req.query.orderid;
    let reply;

    try{
        reply = await Products.findOne({
            where: {
                productnumber: productnumber,
            }
        })
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "Product not found"});
        res.end()
        return;
    }
    res.status(200).send(reply);
    res.end()
}

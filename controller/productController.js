const Products = require('../model/product.js');

exports.getProduct = async (req, res) => {
    let reply;
    const productnumber = req.query.productnumber;

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

exports.getProducts = async (req, res) => {
    let reply;

    try{
        reply = await Products.findAll()
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "No products exist"});
        res.end()
        return;
    }
    res.status(200).send(reply);
    res.end()
}
const Products = require('../model/products.js');
const Images = require('../model/images.js');

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

exports.addProduct = async (req, res) => {
    const product = req.body;
    let createdProduct;
    try{
        createdProduct = await createProduct(product);
        if (product.isImage) {
            // await createImage(image, productnumber)
        }
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

createProduct = async(product) => {
    let reply;
    try {
        reply = await Products.create({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category
    })
    } catch(err) {
        return false;
    }
    return reply;
}

createImage = async(image, productnumber) => {
    let reply;
    try {
        reply = await Images.create({
            productnumber: productnumber,
            description: image.description,
            url: image.url
    })
    } catch(err) {
        return false;
    }
    return reply;
}
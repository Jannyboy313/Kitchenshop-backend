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
    const product = req.body.product;
    const image = req.body.image;
    let createdProduct;
    try{
        createdProduct = await createProduct(product);
        if (image.image.length > 5) {
            await createImage(image, createdProduct.productnumber)
        }
    } catch(err) {
        res.status(406).send({"error": err});
        console.log(err);
    }
    res.status(200).send(createdProduct);
    res.end()
}

exports.updateProduct = async (req, res) => {
    const product = req.body.product;
    const image = req.body.image;
    let createdProduct;
    try{
        createdProduct = await createProduct(product);
        if (image.image.length > 5) {
            await createImage(image, productnumber)
        }
    } catch(err) {
        res.status(409).send({"error": err});
        console.log(err);
    }
    res.status(200).send(createdProduct);
    res.end()
}

exports.deleteProduct = async (req, res) => {
    const productnumber = req.query.productnumber;
    try{
        await Products.destroy({
            where: {
                productnumber: productnumber
            }
        })
        await Images.destroy({
            where: {
                productnumber: productnumber
            }
        })
    } catch(err) {
        res.status(404).send({"error": err});
        console.log(err);
    }
    res.status(200);
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

updateProduct = async(product) => {
    let reply;
    try {
        reply = await Products.update({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category
    }, {where: product.productnumber})
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
            url: image.image
    })
    } catch(err) {
        return false;
    }
    return reply;
}

updateImage = async(image, productnumber) => {
    let reply;
    try {
        reply = await Images.update({
            description: image.description,
            url: image.image
    }, {where: productnumber})
    } catch(err) {
        return false;
    }
    return reply;
}
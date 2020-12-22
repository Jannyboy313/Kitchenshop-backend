const Categories = require('../model/categories.js');

exports.getCategories = async (req, res) => {
    let reply;

    try{
        reply = await Categories.findAll()
    } catch(err) {
        res.status(404).send(err.message);
        res.end();
        return;
    }
    if (!reply) {
        res.status(404).send({"error": "No categories exist"});
        res.end()
        return;
    }
    res.status(200).send(reply);
    res.end()
}

exports.addCategory = async (req, res) => {
    const category = req.body;
    let createdCategory;
    try{
        createdProduct = await createCategory(category);
    } catch(err) {
        res.status(406).send({"error": err});
        console.log(err);
    }
    res.status(200).send(createdCategory);
    res.end()
}

exports.deleteCategory = async (req, res) => {
    const category_name = req.query.category_name;
    try{
        await Categories.destroy({
            where: {
                name: category_name
            }
        })
    } catch(err) {
        res.status(404).send({"error": err});
        console.log(err);
    }
    res.status(200);
    res.end()
}

createCategory = async(category) => {
    let reply;
    try {
        reply = await Categories.create({
            name: category.name,
            description: category.description
    })
    } catch(err) {
        return err;
    }
    return reply;
}
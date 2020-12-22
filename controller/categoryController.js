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
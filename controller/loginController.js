const loginQueries = require("../DOW/queries/loginQueries.js")

exports.getLoginInfo = async (req, res) => {
    let reply;
    const credentials = req.body;
    try{
        reply = await loginQueries.getLogin(credentials)
    } catch(err) {
        console.error(err.message);
    }
    if (typeof reply === 'object' && reply !== null) {
        res.status(200).send(reply)
    } else {
        res.status(404).send("User not found")
    }
    res.end()
};
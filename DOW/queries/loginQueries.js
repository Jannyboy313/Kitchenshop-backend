const db = require("../connection.js");
const loginModel = require("../../model/loginModel.js");

exports.getLogin = async (creds) => {
    let queryReply;
    try {
        queryReply = await db.sequelize.query(
            "SELECT username, permission FROM app_user" +
            " WHERE username = '" + creds.username +
            "' AND password = '" + creds.password + "'"
        );
    }catch (err) {
        //console.handleError(err.message);
    }
    queryReply = queryReply[0][0]
    return new loginModel(queryReply.username, queryReply.permission);
};
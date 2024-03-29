const jwt = require('jsonwebtoken');
require('dotenv/config');

exports.user = async (req, res, next) => {
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
        if(err) {
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            req.user_id = authorizedData.user.user_id
            next();
        }
    })
}

exports.admin = (req, res, next) => {
    jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
        if(err) {
            console.log('ERROR: Could not connect to the protected route');
            res.sendStatus(403);
        } else {
            if (authorizedData.user.role === 'admin') {
                req.user_id = authorizedData.user.user_id
                next();
            } else {
                res.sendStatus(403);
            }
        }
    })
}

exports.checkToken = (req, res, next) => {
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.sendStatus(401);
    }
}
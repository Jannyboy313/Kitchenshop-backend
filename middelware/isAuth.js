const jwt = require('jsonwebtoken');
require('dotenv/config');

exports.user = async (req, res, next) => {
    //TODO Enable when out of production
    // jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
    //     if(err) {
    //         console.log('ERROR: Could not connect to the protected route');
    //         res.sendStatus(403);
    //     } else {
    //         req.user_id = authorizedData.users.user_id
    //         next();
    //     }
    // })
    next();
}

exports.admin = (req, res, next) => {
    //TODO Enable when out of production
    // jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authorizedData) => {
    //     if(err) {
    //         console.log('ERROR: Could not connect to the protected route');
    //         res.sendStatus(403);
    //     } else {
    //         if (authorizedData.users.role === 'admin') {
    //             next();
    //         } else {
    //             res.sendStatus(403);
    //         }
    //     }
    // })
    next();
}

exports.checkToken = (req, res, next) => {
    next();
    //TODO Enable when out of production
    // const header = req.headers['authorization'];
    // if(typeof header !== 'undefined') {
    //     const bearer = header.split(' ');
    //     const token = bearer[1];
    //     req.token = token;
    //     next();
    // } else {
    //     res.sendStatus(401);
    // }
}
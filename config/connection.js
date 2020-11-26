const { Sequelize } = require('sequelize');
require('dotenv/config');

exports.sequelize = new Sequelize(process.env.DATABASE_CONNECTION, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

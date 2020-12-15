const { Sequelize } = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})

module.exports = sequelize;
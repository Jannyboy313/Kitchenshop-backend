const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');
const Products = require('./products.js');
const Users = require('./users');

const Orders = sequelize.define('orders', {
    orders_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'user_id'
        }
    },
    productnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Products,
            key: 'productnumber'
        }
    }
});

module.exports = (Orders);
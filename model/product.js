const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');
const Category = require('./category.js');

const Product = sequelize.define('product', {
    productnumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(1000),
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT(6,2),
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING(50),
        references: {
            model: Category,
            key: 'name'
        }
    }
});

module.exports = (Product);
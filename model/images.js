const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');
const Products = require('./products.js');

const Images = sequelize.define('image', {
    image_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    productnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Products,
            key: 'productnumber'
        }
    },
    description: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = (Images);
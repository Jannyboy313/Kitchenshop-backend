const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');
const Product = require('./product.js');

const Image = sequelize.define('image', {
    image_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    productnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productnumber'
        }
    },
    description: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = (Image);
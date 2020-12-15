import sequelize, { Sequelize } from '../db/connection.js';

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
        type: Sequelize.INTEGER,
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
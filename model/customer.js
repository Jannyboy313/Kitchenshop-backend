import sequelize, { Sequelize } from '../db/connection.js';

const Customer = sequelize.define('customer', {
    customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    firstname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Address,
            key: 'address_id'
        }
    }
});

module.exports = (Customer);
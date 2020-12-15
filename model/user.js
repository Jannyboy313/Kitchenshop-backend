import sequelize, { Sequelize } from '../db/connection.js';

const User = sequelize.define('user', {
    customer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
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

module.exports = (User);
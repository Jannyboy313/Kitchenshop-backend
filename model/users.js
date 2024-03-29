const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');
const Addresses = require('./addresses.js');

const Users = sequelize.define('user', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    firstname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    middlename: {
        type: Sequelize.STRING(10),
        allowNull: true
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
            model: Addresses,
            key: 'address_id'
        }
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user'
    }
});

module.exports = (Users);
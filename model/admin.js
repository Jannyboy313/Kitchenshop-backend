const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');

const Admin = sequelize.define('admin', {
    admin_id: {
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
    }
});

module.exports = (Admin);
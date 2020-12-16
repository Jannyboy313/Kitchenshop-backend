const sequelize = require('../db/connection.js');
const Sequelize = require('sequelize');

const Category = sequelize.define('category', {
    name: {
        type: Sequelize.STRING(50),
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING(600),
        allowNull: true
    }
});

module.exports = (Category);
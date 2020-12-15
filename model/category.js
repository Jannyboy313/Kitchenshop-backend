import sequelize, { Sequelize } from '../db/connection.js';

const Category = sequelize.define('category', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = (Category);
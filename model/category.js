import sequelize, { Sequelize } from '../db/connection.js';

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
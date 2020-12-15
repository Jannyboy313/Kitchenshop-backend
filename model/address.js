import sequelize, { Sequelize } from '../db/connection.js';

const Address = sequelize.define('address', {
    address_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    city: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    street_address: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    zipcode: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    }
});

module.exports = (Address);
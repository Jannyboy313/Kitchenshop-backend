import sequelize, { Sequelize } from '../db/connection.js';

const Orders = sequelize.define('orders', {
    orders_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: customer,
            key: 'customer_id'
        }
    },
    articlenumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productnumber'
        }
    }
});

module.exports = (Orders);
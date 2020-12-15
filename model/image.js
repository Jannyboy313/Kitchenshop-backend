import sequelize, { Sequelize } from '../db/connection.js';

const Image = sequelize.define('image', {
    image_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    productnumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productnumber'
        }
    },
    description: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = (Image);
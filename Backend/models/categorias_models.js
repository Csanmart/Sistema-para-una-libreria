const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');


const categorias = new sequelize.define('Categorias', {
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    activo: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1,
    }
},{
    tableName: 'categorias'
});

module.exports = categorias;
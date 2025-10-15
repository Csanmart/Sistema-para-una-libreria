const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');


const categorias =  sequelize.define('categorias', {
    id_categorias: {
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
    activado: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1,
    }
},{
    tableName: 'categorias',
    timestamps: false
});

module.exports = categorias;
const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');




const libros = sequelize.define('Libros', {
    id_libro:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName: 'libros',
    timestamps: false
})


module.exports = libros
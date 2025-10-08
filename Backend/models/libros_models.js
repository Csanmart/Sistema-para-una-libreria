const sequelize = require('../config.js/config');
const {DataTypes, Model} = require('sequelize');
const categorias = require('./categorias_models')



const libros = new sequelize.define('Libros', {
    id_libro:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        references:{
            model: categorias,
            key: 'id_categorias'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    tableName: 'libros'
})


module.exports = libros;
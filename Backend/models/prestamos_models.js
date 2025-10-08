const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');
const usuario = require('./usuarios_models');
const libros =  require('./libros_models');


const prestamos = new sequelize.define('prestamos',{
    id_prestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        references:{
            model: usuario,
            key:'id_usuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    libro_id:{
        type: DataTypes.INTEGER,
        references: {
            model: libros,
            key: 'id_libro'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
},{
    tableName: 'prestamos'
})
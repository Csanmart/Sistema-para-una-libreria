const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');

const usuario = sequelize.define('Usuarios', {
    id_usuario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rol:{
        type: DataTypes.ENUM('Administrador', 'Operario'), 
        defaultValue: 'operario',
        allowNull: false
    }
},{
    tableName: 'usuarios'
});

module.exports = usuario;

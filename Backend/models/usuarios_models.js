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
    },
    rol:{
        type: DataTypes.ENUM('Administrador', 'Operario'), 
        defaultValue: 'Operario',
        allowNull: false
    }
},{
    tableName: 'usuarios',
    timestamps: false
});

module.exports = usuario;

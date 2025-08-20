const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');

class Usuario extends Model{}

Usuario.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(400),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(400),
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('admin', 'operario'), 
        defaultValue: 'operario' 
    },
},{
    tableName: 'Usuarios',
    modelName: 'Usuarios',
    timestamps: false,
    sequelize
});


module.exports = Usuario;
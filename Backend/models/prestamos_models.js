const sequelize = require('../config.js/config');
const {DataTypes} = require('sequelize');
const usuario = require('./usuarios_models');
const libros =  require('./libros_models');


const prestamos = sequelize.define('prestamos',{
    id_prestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: usuario,
            key:'id_usuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    libro_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: libros,
            key: 'id_libro'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    fecha_prestamo:{
        type:DataTypes.DATE,
        allowNull: false
    },
    fecha_devolucion:{
        type:DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfterFechaPrestamo(value){
                if(this.fecha_prestamo && value < this.fecha_prestamo){
                    throw new Error('Error la fecha de devolucion no puede ser  la anterior de la fecha de prestamo')
                }
            }
        }
    },
    estado: {
        type: DataTypes.ENUM('PRESTADO', 'DEVUELTO'),
        defaultValue: 'PRESTADO',
        allowNull: false
    }
},{
    tableName: 'prestamos',
    timestamps: false
})


module.exports = prestamos
//Configuramos el sequelize

const {Sequelize} = require('sequelize');

//Configuracion del env

require('dotenv').config();

//Configuracion de la base de datos
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.PORT_DB
});

async function Connection(){
    try{
        await sequelize.authenticate();
        console.log("Conectado en la base de datos ✅")
    }catch(error){
        console.log("Error en la conexion de la base de datos 🔴")
    }
}

Connection()

module.exports = sequelize;
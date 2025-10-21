const {Sequelize, Model} = require('sequelize');

const sequelize = new Sequelize('libreria', 'root', '',{
    host: 'localhost',
    dialect:'mysql',
    port: 3306
});

function Conectar(){
    try{
        sequelize.authenticate();
        console.log('Conectado a la base de datos');
    }catch(Error){
        console.log('Error conectando a la base de datos');
    }
}

Conectar();

module.exports = sequelize;
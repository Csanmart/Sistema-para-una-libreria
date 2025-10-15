//Configuracion del dotvenv
require('dotenv').config()

const sequelize = require("./config.js/config")
// //rutas



//Configuracion de express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

//configuracion del cors
const cors = require('cors');
app.use(cors());

//App routes
const usuariosRouter = require('./routers/usuarios_routers');
const categoriasRouter = require('./routers/categorias_routers');
// app.use(libreria);
app.use('/libreria',usuariosRouter);
//app.use(categorias);
app.use('/libreria',categoriasRouter);


//Configuracio del puerto
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
}); 


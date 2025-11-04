//Configuracion del dotvenv
require('dotenv').config()

const sequelize = require("./config.js/config")
// //rutas



//Configuracion de express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded())

//configuracion del cors

const cors = require('cors');
const corsOptiones = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
};
app.use(cors(corsOptiones));




//App routes
const usuariosRouter = require('./routers/usuarios_routers');
const categoriasRouter = require('./routers/categorias_routers');
const librosRouter = require('./routers/libros_routes');
const prestamosRouter  = require('./routers/prestamos_routers')

// app.use(usuarios);
app.use('/libreria',usuariosRouter);
//app.use(categorias);
app.use('/libreria',categoriasRouter);
//app.use(libros)
app.use('/libreria', librosRouter);
//app.use(prestamos)
app.use('/libreria', prestamosRouter);


//Configuracio del puerto
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
}); 


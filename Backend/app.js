//Configuracion del dotvenv
require('dotenv').config()

const sequelize = require("./Usuarios/config/db.config")
// //rutas
// const ProductRouters = require('./Productos/routers');
// const UsuariosRouters = require('./Usuarios/routers');


//Configuracion de express
const express = require('express');

const app = express();
const PORT = process.env.PORT

app.use(express.json());

//configuracion del cors
const cors = require('cors');
app.use(cors());

//App routes
// app.use('/productos', ProductRouters);
// app.use('/usuarios', UsuariosRouters);

//Configuracio del puerto
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});


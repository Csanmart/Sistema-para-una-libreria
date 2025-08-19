require('dotenv').config()

//Configuracion de express
const express = require('express');

const app = express();
const PORT = process.env.PORT

app.use(express.json());

//configuracion del cors
const cors = require('cors');
app.use(cors());

//Configuracio del puerto
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});


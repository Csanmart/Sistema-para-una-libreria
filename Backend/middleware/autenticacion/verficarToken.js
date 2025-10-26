const jwt = require('jsonwebtoken');
require('dotenv').config()

function verificarToken(req, res, next){
    const header = req.headers['authorization'];
    if(!header) return res.status(400).json({
        message: 'Token requerido'
    })

    const token = header.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JTW_CLAVE);
        req.usuario = decoded;
        next()
    }catch(error){
        res.status(403).json({message: 'Token invalido'});
    }
}

module.exports = verificarToken;
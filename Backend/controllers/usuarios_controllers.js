const usuarioModelos = require('../models/usuarios_models');
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.createUsuario = async(req, res)=>{
    const {nombre, contrasena, rol} = req.body;
    
    try {

        if(!nombre || !contrasena|| !rol ){
            res.status(400).json({
                message: 'los campos no pueden estar vacios'
            });
        }
        var usuario = await usuarioModelos.create(req.body);

        res.status(201).json({result: usuario});
    } catch (error) {
        res.status(400).json({
            message: 'Error creando el usuario',
            date :  error
        })
    }
};


exports.inicioSesion = async(req, res)=>{
    const {nombre, contrasena} = req.body;
    try {
        if(!nombre || !contrasena){
            res.status(400).json({
                message:'No puedes dejar los campos vacios' 
            })
        };

        const usuario = await usuarioModelos.findOne({where: {nombre}});
        if(!usuario) return res.status(400).json({message: 'No se encuentra este usuario'});

        if(contrasena != usuario.contrasena){
            return res.status(400).json({message: 'No coindicen las contrasenas'})
        }
        
        const token = jwt.sign(
            {id_usuario: usuario.id_usuario, rol: usuario.rol}, process.env.JTW_CLAVE,{expiresIn: '2h'}
        )

        res.status(200).json({
            message: 'iniciando sesion',
            token,usuario:{
                id_usuario: usuario.id_usuario,
                rol: usuario.rol 
            }
        });

    }catch(error) {
        res.status(400).json({
            message: 'No se puede iniciar sesion',
            data: error
        })
    }
};


exports.verUsuarios = async(req, res)=>{
    try{
        const usuario = await usuarioModelos.findAll();
        
        if(!usuario)return res.status(400).json({
            message: 'No se encuentran usuarios'
        })

        res.status(200).json({
            message: 'Todos los usuarios',
            data: usuario
        })
    }catch(error){
        res.status(400).json({
            message: 'Error mostrando los usuarios',
            data: error
        });
    };
};

exports.usuarioPorId = async(req, res)=>{
    try{
        const {id_usuario} = req.params;
        const usuario = await usuarioModelos.findByPk(id_usuario);
        if(!usuario) return res.status(200).json({
            message: 'No se encuentra este usuario'
        })
        res.status(200).json({message: 'Usuario', date: usuario})
    }catch(error){
        res.status(400).json({
            message: 'Error econtrando el usuario',
            date: error
        })
    }
};

exports.actualizarUsuario = async(req, res)=>{
    try{
        const {nombre, contrasena} = req.body;
        const {id_usuario} = req.params;
        
        const usuario =  await usuarioModelos.findByPk(id_usuario);
        
        if(!usuario) return res.status(400).json({
            message: 'No se encuentra el usuario'
        });

        if(nombre) usuario.nombre = nombre
        if(contrasena)  usuario.contrasena = contrasena

        usuario.save();

        res.status(200).json({message: 'Usuario actualizado', date: usuario});
    }catch(error){
        res.status(400).json({message: 'Error actualizando el usuario'})
    }
};


exports.elimanarUsuario = async(req, res)=>{
    try {
        const {id_usuario} = req.params;
        const usuario = await usuarioModelos.findByPk(id_usuario);
        usuario.destroy()
        res.status(200).json({message: 'Usuario elemiando', data: usuario});
    } catch (error) {
        res.status(400).json({message: 'Error elimando el usuario'});
    }
};


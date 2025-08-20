//llamamos a los modelos
const UsuarioModels = require('../modules/Usuario.Models');

//llamamos al jsonWebToken
const jwt = require('jsonwebtoken');


exports.getAllUsuarios = async(req, res)=>{
    try{
        const usuario = await UsuarioModels.findAll();
        if(usuario.length === 0){
            return res.status(404).json({
                success: false,
                message: 'No se encuentran usuarios 🤷‍♂️'
            });
        };
        res.status(200).json({sucess: true, message: "Todos los usuarios ✅", data: usuario});
    }catch(error){
        res.status(400).json({message: "Error tomando los datos... 🔴", error})
    }
}

exports.getUsuarioById = async(req, res)=>{
    const {id} = req.params;
    try{
        const usuario = await UsuarioModels.findByPk(id);
        if(usuario.length === 0){
            return res.status(404).json({
                success: false,
                message: 'No hay usuarios en estos momentos 🤷‍♂️'
            })
        }
        res.status(200).json({success: true, message: 'Usuario encontrado ✅', data: usuario});
    }catch(error){
        res.status(400).json({succcess: false, message: "Error tomando los datos 🔴", data: error});
    }
};

exports.CreateUser = async(req, res)=>{
    const {nombre, apellido} = req.body;
    if(!nombre || !apellido){
        return res.status(500).json({
            succcess: false,
            message: 'Error debes llenat todos los campos 🔴',
        })
    }
    try{
        const usuario = await UsuarioModels.create(req.body);
        res.status(201).json({succcess: true, message: 'Registro exitoso', data: usuario});
    }catch(error){
        res.status(400).json({success: false, message: 'Error creando los datos 🔴', data: error});
    }
};
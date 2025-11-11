const Usuarios = require('../models/usuarios_models');
const Prestamos = require('../models/prestamos_models');
const categorias = require('../models/categorias_models');
const libros = require('../models/libros_models');
const { default: Usuarios } = require('../../Frontend/libreria/src/Pages/admin/Usuarios');


exports.ResumenAllModels = async(req,res)=>{
    try{
        const dataUsuario = await Usuarios.findAll();
        const dataPrestamos = await Prestamos.findAll();
        const dataCategorias = await categorias.findAll();
        const dataLibros = await libros.findAll();


        res.status(200).json({message: 'Cargando todos los datos...',
            totalUsuarios: dataUsuario[0].totalUsuarios || 0,
            totalPrestamos: dataPrestamos[0].totalPrestamos || 0,
            totalCategorias: dataCategorias[0].totalCategorias || 0,
            totalLibros: dataLibros[0].totalLibros || 0
        })
    }catch(error){
        res.status(500).json({Message: 'Error no encuentro los datos', date: error});
    }
}
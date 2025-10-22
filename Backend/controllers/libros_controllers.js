const libros = require('../models/libros_models');
const categorias = require('../models/categorias_models');
const { mostrarPorId } = require('./categorias_controllers');


exports.CrearLibro = async(req, res) =>{
    try{
        const {titulo, autor, cantidad, categoria_id} = req.body;
        
        const categoriaExistente = await categorias.findByPk(categoria_id)

        if(!categoriaExistente){
            res.status(400).json({message: 'No se encuentra el codigo'})
        }
        
        const crearLibro = await libros.create(req.body);
        
        if(!titulo || !autor || !cantidad || !categoria_id){
            res.status(400).json({message: 'Todos los campos estan vacios'})
        }

        res.status(201).json({message: 'Libro creado', date: crearLibro});
        
    }catch(error){
        res.status(400).json({message: 'Error creando un libro', date: error})
    }
};

exports.MostrarTodosLibros = async(req, res)=>{
    try{
        const MostrarLibros = await libros.findAll();

        if(MostrarLibros.length === 0) {return res.status(400).json({message: 'No se encuentran libros actuamente'})};

        res.status(200).json({message: 'Mostrando todos los libros', date: MostrarLibros});
    }catch(error){
        res.status(400).json({message: 'Error mostrando los libros', date: error})
    }
};

exports.MostrarPorId = async(req, res)=>{
    try {
        const {id_libro} = req.params

        if(!id_libro)return res.status(400).json({message: 'No se encuentra este id', date: id_libro});

        const MostrarPorId = await libros.findByPk(id_libro)
        
        if(MostrarPorId.length === 0) return res.status(400).json({message:    'No hay datos para mostrar', date: id_libro});
        
        
        
        res.status(200).json({message: 'Libro por id', date: MostrarPorId});
    } catch (error) {
        res.status(400).json({message: 'Error buscando el libro', date: error})
    }
};

exports.ActualizarLibro = async(req, res)=>{
    try {
        const {id_libro} =  req.params;
        const {categoria_id, titulo, autor, cantidad} = req.body;

        if(categoria_id)return res.status(400).json({message: 'Este id no se encuentra'})

        const actualizaLibro = await libros.findByPk(id_libro);

        if(!actualizaLibro) return res.status(400).json({message: 'No se encuentra el id'});

        if(!categoria_id || !titulo || !autor || !cantidad) return res.status(400).json({message: 'los campos a cambiar estan vacios'});
        
        if(categoria_id) actualizaLibro.categoria_id = categoria_id;
        if(titulo) actualizaLibro.titulo = titulo;
        if(autor) actualizaLibro.autor = autor;
        if(cantidad) actualizaLibro.cantidad = cantidad;
        
        actualizaLibro.save()

        res.status(200).json({message: 'Libro actualizado', date: actualizaLibro});

    } catch (error) {
        res.status(400).json({message: 'Error actualizando el libro', date: error})
    }
}

exports.EliminarLibro = async(req, res)=>{
    try {
        const {id_libro} = req.params;
        const eliminarLibro = await libros.findByPk(id_libro);
        
        if(!elimanarUsuario) return res.status(400).json({message: 'Error no se encuentra el libro'});

        
        res.status(200).json({message: 'Libro eliminado', date: eliminarLibro});
    } catch (error) {
        res.status(400).json({message: 'Error eliminando el libro', date: error})
    }
};
const categoriaModel = require('../models/categorias_models');
const {RelationCategoria, RelationLibro }  = require('../models/relationChips/relations');
//Creaciacion de categorias para cada libro

exports.crearCategoria = async(req, res)=>{
    try{
        const {nombre} = req.body;
        if(!nombre){
            res.status(404).json({message: 'Todos los campos deben de estar completos'});
        }
        const categoria = await categoriaModel.create({
            nombre
        });
        res.status(201).json({message: 'Categoria creada con exito', date: categoria});
    }catch(error){
        res.status(400).json({
            message: 'Error creando una categoria',
            date: error
        })
    }
};


exports.mostrarTodasCategorias = async(req, res)=>{
    try{
        const categoria = await categoriaModel.findAll()
        if(categoria == 0) return res.status(400).json({message: 'No se encuentran categorias'});
        res.status(200).json({message: 'Todas las categorias....', date: categoria});
    }catch(error){
        res.status(400).json({message: 'Error cargando los datos..'})
    }
};


exports.mostrarPorId = async(req, res)=>{
    try{
        const {id_categorias} = req.params;
        const categoria = await categoriaModel.findByPk(id_categorias);

        if(!categoria) return res.status(400).json({message: 'Error no encuentro el id'})

        res.status(200).json({message: 'Mostrando categoria', date: categoria});
    }catch(error){
        res.status(400).json({message: 'Error cargando el id', date: error});
    }
};


exports.actualizarCategoria = async(req, res)=>{
    try {
        const {id_categorias} = req.params;
        const {nombre, activado} = req.body;
        const categorias = await categoriaModel.findByPk(id_categorias)

        if(!categorias)return res.status(400).json({message: 'No se encuentra la categoria'});

        if(nombre != undefined) categorias.nombre = nombre
        if(activado !== undefined) categorias.activado = activado

        categorias.save();

        res.status(200).json({message: 'Categoria actualizada', date: categorias});
    } catch (error) {
        res.status(400).json({message:'Error actualizando la categoria', date: error})
    }
};

exports.eliminarCategoria = async(req, res)=>{
    try{
        const {id_categorias} = req.params;
        const categoria = await categoriaModel.findByPk(id_categorias);
        if(!categoria) return res.status(400).json({message: `No se encuentra este id ${id_categorias}`});
        
        categoria.activado = 0;
        await categoria.save();

        res.status(200).json({message: 'Categoria desactivada correctamente'})
    }catch(error){
        res.status(400).json({message: 'Error eliminando la categoria'})
    }
};


exports.MostrarlibrosPorCategoria = async(req, res)=>{
    try{
        const {id_categoria} = req.params;
        
        const categoria = await RelationCategoria.findByPk(id_categoria, {
            include: {
                model: RelationLibro,
                attributes: ['id_libro', 'titulo', 'autor', 'cantidad']
            }
        })

        if(!categoria) res.status(400).json({message: 'Error no se encuentra la categoria'});

        res.status(200).json({message: `libros de la categoria : ${categoria.nombre}`, date: categoria});

    }catch(error){
        res.status(400).json({message: 'Error comprobando libros'});
    }
}
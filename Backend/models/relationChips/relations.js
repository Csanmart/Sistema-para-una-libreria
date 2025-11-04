const RelationLibro = require('../libros_models');
const RelationCategoria = require('../categorias_models');
const RelationPrestamo = require('../prestamos_models');
const RelationUsuario = require('../usuarios_models');

//Relacion entre la categoria y el libros
RelationCategoria.hasMany(RelationLibro,{
    foreignKey: 'categoria_id'
});
RelationLibro.belongsTo(RelationCategoria, {
    foreignKey: 'categoria_id',
    
})

//Relacion entre el prestamo y el libro prestado
RelationLibro.hasMany(RelationPrestamo,{foreignKey: 'libro_id'});
RelationPrestamo.belongsTo(RelationLibro, {foreignKey: 'libro_id'})

//Relacion entre el prestamo y el usuario que hizo el prestamos
RelationUsuario.hasMany(RelationPrestamo, {foreignKey: 'usuario_id', onDelete: 'CASCADE'})
RelationPrestamo.belongsTo(RelationUsuario, {foreignKey: 'usuario_id'});

module.exports = {RelationCategoria, RelationLibro, RelationUsuario, RelationPrestamo};
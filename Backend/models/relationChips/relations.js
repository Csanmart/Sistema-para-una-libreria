const RelationLibro = require('../libros_models');
const RelationCategoria = require('../categorias_models');

RelationCategoria.hasMany(RelationLibro,{
    foreignKey: 'categoria_id'
});

RelationLibro.belongsTo(RelationCategoria, {
    foreignKey: 'categoria_id'
})


module.exports = {RelationCategoria, RelationLibro};
const express = require('express');
const router = express.Router();
const categoriasControllers = require('../controllers/categorias_controllers');

const verificarRol = require('../middleware/autenticacion/verficarRol'); 
const verificarToken = require('../middleware/autenticacion/verficarToken');

// Rutas para categorías
router.get('/libros/categorias', verificarToken, verificarRol(['Administrador' ,'Operario']),categoriasControllers.mostrarTodasCategorias);

router.get('/libros/categorias/:id_categorias', verificarToken, verificarRol(['Administrador', 'Operario']),categoriasControllers.mostrarPorId);

router.get('/libros/categorias/:id_categoria/libros', verificarToken, verificarRol(['Administrador', 'Operario']),categoriasControllers.MostrarlibrosPorCategoria)

router.post('/libros/crear', verificarToken, verificarRol(['Administrador']),categoriasControllers.crearCategoria);

router.put('/libros/categorias/:id_categorias', verificarToken, verificarRol(['Administrador', 'Operario']),categoriasControllers.actualizarCategoria);

router.delete('/libros/categorias/:id_categorias', verificarToken, verificarRol(['Administrador']),categoriasControllers.eliminarCategoria);

module.exports = router;
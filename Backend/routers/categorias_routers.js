const express = require('express');
const router = express.Router();
const categoriasControllers = require('../controllers/categorias_controllers');

// Rutas para categorías
router.get('/libros/categorias', categoriasControllers.mostrarTodasCategorias);
router.get('/libros/categorias/:id_categorias', categoriasControllers.mostrarPorId);
router.get('/libros/categorias/:id_categoria/libros', categoriasControllers.MostrarlibrosPorCategoria)
router.post('/libros/categorias', categoriasControllers.crearCategoria);
router.put('/libros/categorias/:id_categorias', categoriasControllers.actualizarCategoria);
router.delete('/libros/categorias/:id_categorias', categoriasControllers.eliminarCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros_controllers');
const categoriasController = require('../controllers/categorias_controllers')
router.post('/libros/crearLibros', librosController.CrearLibro);
router.get('/libros/mostrarLibros', librosController.MostrarTodosLibros);
router.get('/libros/mostrarLibro/:id_libro', librosController.MostrarPorId);
router.get('/libros/categorias/id_categoria/libros',categoriasController.MostrarlibrosPorCategoria)
router.put('/libros/actualizarLibro/:id_libro', librosController.ActualizarLibro);
router.delete('/libros/eliminarLibros/:id_libro', librosController.EliminarLibro)

module.exports = router;

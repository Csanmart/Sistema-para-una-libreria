const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros_controllers');

router.post('/libros/crearLibros', librosController.CrearLibro);
router.get('/libros/mostrarLibros', librosController.MostrarTodosLibros);
router.get('/libros/mostrarLibro/:id_libro', librosController.MostrarPorId);


module.exports = router;

const express = require('express');
const router = express.Router();
const librosController = require('../controllers/libros_controllers');
const categoriasController = require('../controllers/categorias_controllers')

//Verificacion de token
const verificarRol = require('../middleware/autenticacion/verficarRol');
const verificarToken = require('../middleware/autenticacion/verficarToken');



router.post('/libros/crearLibros',verificarToken, verificarRol(['Administrador']) , librosController.CrearLibro);
router.get('/libros/mostrarLibros', verificarToken, verificarRol(['Administrador', 'Operador']),librosController.MostrarTodosLibros);
router.get('/libros/mostrarLibro/:id_libro',verificarToken, verificarRol(['Administrador']), librosController.MostrarPorId);
router.get('/libros/categorias/id_categoria/libros',verificarToken, verificarRol(['Administrador']),categoriasController.MostrarlibrosPorCategoria)
router.put('/libros/actualizarLibro/:id_libro',verificarToken, verificarRol(['Administrador']), librosController.ActualizarLibro);
router.delete('/libros/eliminarLibros/:id_libro',verificarToken, verificarRol(['Administrador']), librosController.EliminarLibro)

module.exports = router;

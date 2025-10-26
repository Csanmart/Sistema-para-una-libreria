const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamos_controller');

//Verficacion de roles
const verificarRol = require('../middleware/autenticacion/verficarRol'); 
const verificarToken = require('../middleware/autenticacion/verficarToken');


// Crear un préstamo
router.post('/prestamos', verificarToken, verificarRol(['Operador']),prestamosController.CrearPrestamo);

// Mostrar todos los préstamos
router.get('/prestamos', verificarToken, verificarRol(['Operador', 'Administrador']),prestamosController.mostrarTodosPrestamos);

// Mostrar un préstamo por ID
router.get('/prestamos/:id_prestamo', verificarToken, verificarRol(['Operador', 'Administrador']),prestamosController.prestamosPorId);

// Actualizar un préstamo
router.put('/prestamos/:id_prestamo', verificarToken, verificarRol(['Operador', 'Administrador']),prestamosController.actualizarPrestamo);

// Deshabilitar (no eliminar) un préstamo
router.delete('/prestamos/:id_prestamo', verificarToken, verificarRol(['Operador', 'Administrador']),prestamosController.deshabilitarPrestamo);

module.exports = router;
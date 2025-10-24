const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamos_controller');

// Crear un préstamo
router.post('/prestamos', prestamosController.CrearPrestamo);

// Mostrar todos los préstamos
router.get('/prestamos', prestamosController.mostrarTodosPrestamos);

// Mostrar un préstamo por ID
router.get('/prestamos/:id_prestamo', prestamosController.prestamosPorId);

// Actualizar un préstamo
router.put('/prestamos/:id_prestamo', prestamosController.actualizarPrestamo);

// Deshabilitar (no eliminar) un préstamo
router.delete('/prestamos/:id_prestamo', prestamosController.deshabilitarPrestamo);

module.exports = router;
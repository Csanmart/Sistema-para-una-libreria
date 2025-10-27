const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuarios_controllers');
const verificarRol = require('../middleware/autenticacion/verficarRol'); 
const verificarToken = require('../middleware/autenticacion/verficarToken');

//Crear usuarios
router.post('/usuarios/registro', verificarToken, verificarRol(['Administrador']),usuariosControllers.createUsuario);
//Inciar sesion
router.post('/usuarios/inicio', usuariosControllers.inicioSesion);


//Mostrar usuarios
router.get('/usuarios/todos-los-usuarios', verificarToken, verificarRol(['Administrador']),usuariosControllers.verUsuarios);

//Mostrar usuarios por id
router.get('/usuarios/especifico/:id_usuario', verificarToken, verificarRol(['Administrador']),usuariosControllers.usuarioPorId);
//Actualizar usuarios
router.put('/usuarios/actualizar/:id_usuario', verificarToken, verificarRol(['Administrador']),usuariosControllers.actualizarUsuario);
//Eliminar usuarios
router.delete('/usuarios/eliminar/:id_usuario', verificarToken, verificarRol(['Administrador']),usuariosControllers.elimanarUsuario);

module.exports = router;
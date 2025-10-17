const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuarios_controllers');


router.post('/usuarios/registro', usuariosControllers.createUsuario);
router.post('/usuarios/inicio', usuariosControllers.inicioSesion);
router.get('/usuarios/todos-los-usuarios', usuariosControllers.verUsuarios);
router.get('/usuarios/especifico/:id_usuario', usuariosControllers.usuarioPorId);
router.put('/usuarios/actualizar/:id_usuario', usuariosControllers.actualizarUsuario);
router.delete('/usuarios/eliminar/:id_usuario', usuariosControllers.elimanarUsuario);

module.exports = router;
const express = require('express');
const router = express.Router();
const ResumenControllers = require('../controllers/resumen_controlers');

router.get('/libros/resumen', ResumenControllers.ResumenAllModels);

module.exports = router
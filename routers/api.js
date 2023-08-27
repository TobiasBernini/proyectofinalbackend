const express = require('express');
const router = express.Router();
const apicontroller = require('../controllers/apiControllers')
const { validarID } = require('../middlewares/validarVariantes')
const checks = require('../middlewares/checks')
const { validarChecks } = require('../middlewares/validarChecks')



router.get('/informacion', apicontroller.informacion)
router.get('/buscar/id/:id', validarID, apicontroller.buscarPorId)
router.get('/buscar/genero/:genero', apicontroller.buscarPorGenero)
router.get('/buscar/nombre/:nombre', apicontroller.busquedaPorNombre)
router.get('/buscar/precio/:precio', apicontroller.busquedaPorPrecio)
router.get('/buscar/exclusivo/:exclusivo', apicontroller.busquedaPorExclusivo)
router.get('/buscar/plataforma/:plataforma', apicontroller.busquedaPorPlataforma)
router.get('/buscar/clasificacion/:clasificacion', apicontroller.busquedaPorClasificacion)
router.get('/buscar/empresa/:empresa', apicontroller.busquedaPorEmpresa)
router.get('/buscar/fechaLanzamiento/:fechaLanzamiento', apicontroller.busquedaPorFechaDeLanzamiento)
router.get('/buscar/distribuidor/:distribuidor', apicontroller.busquedaPorDistribuidor)
router.post('/crear', checks, validarChecks, apicontroller.crear)
router.put('/editar/:id', validarID, checks, validarChecks, apicontroller.editar)
router.delete('/eliminar/:id', validarID, apicontroller.eliminar)

module.exports = router;
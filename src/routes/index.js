const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.js')
const controllerSeries = require('../controllers/series.js')
const controllerResultado = require('../controllers/resultado.js')
router.get('/',controller.paginaInicio)
router.get('/series/:nombreSerie',controllerSeries.series)
router.get('/resultado',controllerResultado.renderResultado)


module.exports = router;
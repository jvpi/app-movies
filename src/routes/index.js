const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.js')
const controllerSeries = require('../controllers/series.js')
router.get('/',controller.paginaInicio)
router.get('/series/:nombreSerie',controllerSeries.series)


module.exports = router;
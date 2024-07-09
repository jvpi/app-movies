const express = require('express')
const router = express.Router()
const controllerVista = require('../controllers/vistaAdmi.js')
const controllerInsertar = require('../controllers/insertarSeries.js')
router.get('/',controllerVista.renderVista)
router.post('/',controllerInsertar.insertarSerie)
module.exports = router
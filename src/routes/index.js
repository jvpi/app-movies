const express = require('express')
const router = express.Router()
const {paginaInicio} = require('../controllers/index.js')
const {series} = require('../controllers/series.js')
const {renderResultado} = require('../controllers/resultado.js')
router.get('/',paginaInicio)
router.get('/series/:nombreSerie/:temporada/:capitulo',series)
router.get('/resultado/:nombreSerie',renderResultado)


module.exports = router;
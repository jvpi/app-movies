const {Router} = require('express')
const router = Router()
const {renderVistaAdmi} = require('../controllers/vistaAdmi.js')
const {insertarSerie} = require('../controllers/insertarSeries.js')
const {actualizar} = require('../controllers/actualizar.js')
router.get('/',renderVistaAdmi)
router.post('/',insertarSerie)
router.get('/actualizar/:id',actualizar)
module.exports = router
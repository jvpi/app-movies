const {Router} = require('express')
const router = Router()
const {renderVistaAdmi} = require('../controllers/vistaAdmi.js')
const {insertarSerie} = require('../controllers/insertarSeries.js')
router.get('/',renderVistaAdmi)
router.post('/',insertarSerie)
module.exports = router
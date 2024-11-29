var express = require('express');
var router = express.Router();
const {renderFormRegistro,registro} = require('../controllers/renderFormRegistro.js')
const {renderFormLogin,login} = require('../controllers/renderFormLogin.js')

router.get('/registro', renderFormRegistro);
router.get('/login',renderFormLogin)
router.post('/login',login)
router.post('/registro', registro);

module.exports = router;

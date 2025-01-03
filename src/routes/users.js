var express = require('express');
var router = express.Router();
const passport = require('passport')
const {renderFormRegistro,registro} = require('../controllers/renderFormRegistro.js')
const {renderFormLogin,login} = require('../controllers/renderFormLogin.js')
const {cerrarSesion} = require('../controllers/cerrarSesion.js')
router.get('/registro', renderFormRegistro);
router.get('/login',renderFormLogin)
router.get('/cerrarSesion',cerrarSesion)
router.post('/login',login)
router.post('/registro', registro);

module.exports = router;

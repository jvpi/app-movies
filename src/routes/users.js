var express = require('express');
var router = express.Router();
const passport = require('passport')
const {renderFormRegistro,registro} = require('../controllers/renderFormRegistro.js')
const {renderFormLogin,login,datos} = require('../controllers/renderFormLogin.js')

router.get('/registro', renderFormRegistro);
router.get('/login',renderFormLogin)
router.post('/login',datos,login)
router.post('/registro', registro);


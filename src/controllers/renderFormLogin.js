const controller = {}
const passport = require('passport')
const usuario = require('../modelos/usuarios.js')
const bcrypt = require('bcryptjs')
controller.renderFormLogin = function (req,res) {
	res.render('vistaLogin');
}

controller.login = passport.authenticate('local',{
	failureRedirect:'/users/login',
	successRedirect:'/admin',
	failureFlash:true
})


module.exports = controller


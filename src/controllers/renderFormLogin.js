const controller = {}

controller.renderFormLogin = function (req,res) {
	res.render('vistaLogin');
}
controller.login = function (req,res) {
	const {correo,contraseña,confimar_contraseña} = req.body
	
	res.redirect('/users/login')
}
module.exports = controller
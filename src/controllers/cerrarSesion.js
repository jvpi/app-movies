const controller = {}
const passport = require('passport')
controller.cerrarSesion = function (req,res,next) {
	req.logout(function (error) {
		if (error) return next(error)
		res.redirect('/users/login')
	})
	
}
module.exports = controller
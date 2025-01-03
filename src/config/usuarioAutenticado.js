const controller = {}

controller.usuarioAutenticado = function (req,res,netx) {
	if (req.isAuthenticated()) return netx()
	res.redirect('/users/login')	
	
}

module.exports = controller
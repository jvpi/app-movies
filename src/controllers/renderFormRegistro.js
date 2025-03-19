const controller = {}
const usuario = require('../modelos/usuarios.js')
const bcrypt = require('bcryptjs')

controller.renderFormRegistro = async  function (req,res) {
	
	res.render('vistaFormRegistro');
}

controller.registro = async function (req,res) {
	const {correo,contraseña,confirmar_contraseña} = req.body
	const errores = []
	const correoUsuario = await usuario.findOne({correo:correo})
	
/*el error de correo no pinta en pantalla porque el error de contraseña no le permite al ejecucion de 
nodejs llegar hay*/
	if (req.headers.api == 'fetch') {
		if (correoUsuario) {
			res.json({ user: 'este correo ya esta en uso '})
			return
		}
	}
	if (contraseña != confirmar_contraseña) {
		errores.push({text:'las contraseña no coinciden'})
		
	}
	if (errores.length > 0) {
		res.render('vistaFormRegistro',{correo,errores});
		return
	}
	if (correoUsuario) {
		req.flash('error_msg','este correo ya esta en uso ')
		res.redirect('/users/registro')
		return
	}
	if (contraseña != undefined) {
		const password = await encrypt (contraseña)
		const nuevoUsuario = new usuario({correo,password})
		const result = await nuevoUsuario.save()
		res.redirect('/users/login')
	}
	
}

async function  encrypt (contraseña) {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(contraseña,salt)
	
}


module.exports = controller
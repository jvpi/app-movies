const passport = require('passport')
const localStrategy = require('passport-local')
const usuario = require('../modelos/usuarios.js')
const bcrypt = require('bcryptjs')
const flash = require('connect-flash');
// {
// 		correoUsuario:'correo',
// 		passwordUsuario: 'contraseña'
// 	},



// passport.use(new localStrategy( async function (correo,contraseña,done) {
// 		const correoUsuario = await usuario.findOne({correo:correo})
	
// 		if (!correoUsuario) {
// 			console.log('Usuario no registrado')
// 			return done(null,false,{message:'Usuario no registrado'})
// 		}
// 		const hash = correoUsuario.password
// 		const bcryptMatchPassword = await matchPassword (contraseña,hash)
// 		if (bcryptMatchPassword) {
// 			return done(null,correoUsuario)
// 		}else {
// 			console.log('Contraseña incorrecta')
// 			return done(null,false,{message:'Contraseña incorrecta'})
// 		}
// 	}
//  ))
// passport.serializeUser(async function  (usuario,done) {
// 	done(null,usuario.id)
// })
// passport.deserializeUser(async function  (id,done) {
// 	// await usuario.findById(id,function (error,usuario) {
// 	// 	done(error,usuario)
// 	// })
// 	const respuesta =  await usuario.findById(id)
// 	done(error,respuesta)

// })
//  async function matchPassword (password,hash) {
// 	return await bcrypt.compare(password,hash)

// }
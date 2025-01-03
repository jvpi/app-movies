const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const usuario = require('../modelos/usuarios.js')
const bcrypt = require('bcryptjs')
const flash = require('connect-flash');
const controller = {}



passport.use(new localStrategy({
		usernameField:'correo',
 		passwordField: 'contraseña'
	}, async function (correo,contraseña,done) {
		const correoUsuario = await usuario.findOne({correo:correo})
		if (!correoUsuario) {
			return done(null,false,{message:'Usuario no registrado'})
		}
		const hash = correoUsuario.password
		const bcryptMatchPassword = await matchPassword (contraseña,hash)
		if (bcryptMatchPassword) {
			return done(null,correoUsuario)
		}else {
			
			return done(null,false,{message:'Contraseña incorrecta'})
		}
	}
 ))
passport.serializeUser(async function  (user,done) {
	done(null,user.id)
})
passport.deserializeUser(async function  (id,done) {
	    try {
      const user = await usuario.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }

})
 async function matchPassword (password,hash) {
	return await bcrypt.compare(password,hash)

}

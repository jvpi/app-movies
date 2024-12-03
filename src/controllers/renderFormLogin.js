const controller = {}
const passport = require('passport')
const usuario = require('../modelos/usuarios.js')
const bcrypt = require('bcryptjs')
const localStrategy = require('passport-local').Strategy
controller.renderFormLogin = function (req,res) {
	res.render('vistaLogin');
}


passport.use(new localStrategy({
		usernameField:'correo',
 		passwordField: 'contraseña'
	},async function (correo,contraseña,done) {
	try {
		const correoUsuario = await usuario.findOne({correo})
	
		if (!correoUsuario) {
			console.log('Usuario no registrado')
			return done(null,false,{message:'Usuario no registrado'})
		}
		const hash = correoUsuario.password
		const bcryptMatchPassword = await matchPassword (contraseña,hash)
		if (bcryptMatchPassword) {
			return done(null,correoUsuario)
		}else {
			console.log('Contraseña incorrecta')
			return done(null,false,{message:'Contraseña incorrecta'})
		}
	} catch(e) {
		// statements
		console.log(e);
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
controller.datos = function (req,res,next) {
	console.log(req.body)
	next()
}

controller.login = passport.authenticate('local',{
	failureRedirect:'/users/login',
	successRedirect:'/admin',
	
})



// function (req,res) {
// 	//const {correo,contraseña,confimar_contraseña} = req.body
	
// 	res.redirect('/users/login')
// }
// controller.signin = function (argument) {
// 	/* body... */
// }
module.exports = controller










// passport.use(new localStrategy(function (correo,password,done) {
// 	if (correo == 'jes' && password == '123') {
// 		return done(null,{id:1,name:'jes'})
// 	}
// 	return done(null,false)	
// }))

// passport.serializeUser( function  (user,done) {
// 	done(null,user.id)
// })
// passport.deserializeUser( function  (id,done) {
// 	return done(null, {id:1,name:'jes'});

// 	//     try {
//     //   //const user = await usuario.findById(id);
//     //   // return done(null, {id:1,name:'jes'});
//     // } catch (err) {
//     //   done(err, null);
//     // }

// })
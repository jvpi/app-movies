const pool = require('./db.js')
const controller = {}
controller.renderVistaAdmi = function (req,res){
	res.render('vistaAdmin')
}

module.exports = controller
const pool = require('./db.js')
const controller = {}
controller.renderVista = function (req,res){
	res.render('vistaAdmin')
}

module.exports = controller
const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderVistaAdmi = async function (req,res){
	const series = await modeloSerie.find()
	
	res.render('vistaAdmin',{series})
}

module.exports = controller
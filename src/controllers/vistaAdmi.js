const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderVistaAdmi = async function (req,res){
	try {
		const series = await modeloSerie.find()
		res.render('vistaAdmin',{series})
	} catch(e) {
		const series = []
		res.render('vistaAdmin',{series})
		console.log(e);
	}
	
}

module.exports = controller
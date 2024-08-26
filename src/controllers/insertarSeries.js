const db = require('./db.js')
const controller = {}
const serieModel = require('../modelos/series.js')
controller.insertarSerie = async function(req,res) {
	try {
		const {nombreSerie,nombreCapitulo,nombreImg,descripcion} = req.body
		const newSerie = new serieModel({
				nombreSerie:nombreSerie,
				temporada1:nombreCapitulo,
				nombreImg:nombreImg,
				descripcion:descripcion
			})
		const result = await newSerie.save()
		res.redirect('/admin')
	} catch(e) {
		res.redirect('/admin')
		console.log(e)
	} finally {
	}

}


module.exports = controller
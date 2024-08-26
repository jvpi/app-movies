const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.actualizar = async function (req,res) {
	const {id} = req.params
	try {
		const result = await modeloSerie.findById(id)
		const objClone = {...result}
		const objSerieClone = {...objClone._doc}

		for (propiedad in objSerieClone) {
			
			if (Array.isArray(objSerieClone[propiedad] )) {
				console.log(objSerieClone[propiedad] )
			}
			
		}
	// const result = await serieModel.updateOne(
	// 	{nombreSerie:"rick and morty"},
	// 	{$push:{temporada1:'capitulo2'}}  <!--  --
	// )
		res.render('actualizar',{result})
	} catch(e) {
		// statements
		console.log(e);
	}
	

}
module.exports = controller
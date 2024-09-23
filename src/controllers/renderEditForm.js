const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderEditForm = async function (req,res) {
	const {id} = req.params
	try {
		const result = await modeloSerie.findById(id)
		const objClone = {...result}
		const objSerieClone = {...objClone._doc}
//console.log(result.id)
		for (propiedad in objSerieClone) {
			
			if (Array.isArray(objSerieClone[propiedad] )) {
				// console.log(objSerieClone[propiedad] )
			}
			
		}
	// const result = await serieModel.updateOne(
	// 	{nombreSerie:"rick and morty"},
	// 	{$push:{temporada1:'capitulo2'}}  <!--  --
	// )
		res.render('renderEditForm',{result})
	} catch(e) {
		// statements
		console.log(e);
	}
	

}
module.exports = controller
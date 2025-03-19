const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderEditForm = async function (req,res) {
	const {id} = req.params
	try {
		const result = await modeloSerie.findById(id)
		console.log(result._doc)
		let cantidadTemporadas = Object.keys(result._doc)
		.filter(function (elemento) {
			let keyTemporada = elemento.includes('temporada')
			return keyTemporada	
		})
		.map(function (elemento) {
			const temporada = result._doc[elemento]
			return temporada
		})
		res.render('renderEditForm',{result,cantidadTemporadas})
	} catch(e) {
		// statements
		console.log(e);
	}


}
// function procesarTemporadas (result) {
	
// 	let propiedades = Object.keys(result._doc)
// 	//console.log(propiedades)
// 	const r = propiedades.filter(function (elemento) {
// 		return elemento.includes('temporada')

// 	})
// 	return r
// }                

module.exports = controller
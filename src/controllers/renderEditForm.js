const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderEditForm = async function (req,res) {
	const {id} = req.params
	try {
		const result = await modeloSerie.findById(id)
		let  cantidadTemporadas = procesarTemporadas(result)
		let capitulos  = Object.values(result._doc).filter(function (elemento) {
			return Array.isArray(elemento) 	
		})
		console.log(result)
		res.render('renderEditForm',{result,capitulos})
	} catch(e) {
		// statements
		console.log(e);
	}


}
function procesarTemporadas (result) {
	
	let propiedades = Object.keys(result._doc)
	const r = propiedades.filter(function (elemento) {
		return elemento.includes('temporada')

	})
	return r
}                

module.exports = controller
const controller = {}
const modeloSerie = require('../modelos/series.js')

controller.eliminarSerie = async function (req,res) {
	try {
		const {id} = req.params
		const result = await modeloSerie.findByIdAndDelete(id, { new: true })
		
		res.redirect('/admin')
	} catch(e) {
		res.redirect('/admin')
		console.log(e);
	}
	
}

module.exports = controller
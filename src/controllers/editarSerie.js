const controller = {}
const modeloSerie = require('../modelos/series.js')

controller.editar = async function (req,res) {
	try {
		const {nombreSerie,nombreCapitulo,nombreImg,descripcion} = req.body
		const {id} = req.params
		const result = await modeloSerie.findByIdAndUpdate(id,{nombreSerie,nombreCapitulo,nombreImg,descripcion})
		res.redirect('/admin')
	} catch(e) {
		res.redirect('/admin')
		console.log(e);
	}
	
}
module.exports = controller
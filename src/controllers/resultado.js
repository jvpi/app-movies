const controller  = {}
const modeloSerie = require('../modelos/series.js')

controller.renderResultado = async function (req,res) {
	const  {nombreSerie} = req.params
	const resultado = await modeloSerie.find({ "nombreSerie": { $regex: new RegExp(nombreSerie, "i") } });
	console.log(resultado)
	res.render('vistaResultado',{resultado})
}

module.exports = controller




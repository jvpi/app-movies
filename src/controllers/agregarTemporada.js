
const controller = {}
const modeloSerie = require('../modelos/series.js')

controller.nuevaTemporada = function (req,res) {
	res.render('vistaNuevaTemporada')
}

module.exports = controller
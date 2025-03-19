const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)
const controller = {}
const modeloSerie = require('../modelos/series.js')
const {agragarCapitulos} = require('./agregarCapotulos.js')
const {eliminarCapitulos} = require('./eliminarCapitulo.js')
controller.nuevaTemporada = async function (req,res) {
	const {primerCapitulo,capitulo,temporada} = req.body
 	const {id,string} = req.params
 	if (string == 'agregar-capitulo') {
 		agragarCapitulos(capitulo,id,temporada)
 		res.redirect(`/admin/renderEditForm/${id}`)
 		return
 	}
 	if (string == 'eliminar-capitulo') {
 		eliminarCapitulos(capitulo,id,temporada)
 		res.redirect(`/admin/renderEditForm/${id}`)
 		return
 	}
 	
 	if (string == 'nueva-temporada') {
 		try{
			const conexion = await client.connect()
			const baseDeDatos = client.db('series')
			const coleccion = baseDeDatos.collection('series')
			const result = await modeloSerie.findById(id)
			const incrementarTemporada = procesarResultadoTemporada (result)
			const agregarTemporada = await coleccion.updateOne( {"nombreSerie": result.nombreSerie },
	  		{ $set: {[incrementarTemporada] : [] } })
	  		res.redirect(`/admin/renderEditForm/${id}`)
		} catch(e) {
			
			console.log(e);
		}finally{
			await client.close();
		}
 	}
	
}

function procesarResultadoTemporada (result) {
	const r = Object.keys(result._doc).filter(function (elemento) {
		return elemento.includes('temporada')
	})
	let string = 'temporada'
	return string + (r.length + 1)
}
module.exports = controller
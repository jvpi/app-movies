const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)
const controller = {}
const modeloSerie = require('../modelos/series.js')
const {agragarCapitulos} = require('./agregarCapotulos.js')
const {eliminarCapitulos} = require('./eliminarCapitulo.js')
controller.nuevaTemporada = async function (req,res) {
	const {primerCapitulo,capitulo} = req.body
 	const {id,string} = req.params
 
 	if (string == 'agregar-capitulo') {
 		//agragarCapitulos(capitulo,id)
 		console.log(string)
 	}
 	if (string == 'eliminar-capitulo') {
 		//eliminarCapitulos(capitulo,id)
 		console.log(string)
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
		} catch(e) {
			
			console.log(e);
		}finally{
			await client.close();
		}
 	}
	
	
 // const result = await modeloSerie.findByIdAndUpdate(
// 		'6704858169a07ab5246a5ffd',
// 		{$push:{ temporada1: [ 'capitulo3' ]}} 
// 	)
// 		

	res.redirect(`/admin/renderEditForm/${id}`)
}

function procesarResultadoTemporada (result) {
	const r = Object.keys(result._doc).filter(function (elemento) {
		return elemento.includes('temporada')
	})
	let string = 'temporada'
	return string + (r.length + 1)
}
module.exports = controller
const controller = {}
const modeloSerie = require('../modelos/series.js')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)

controller.eliminarCapitulos = async function (capitulo,id,temporada) {
	try {
		console.log(capitulo,id,temporada)
		const conexion = await client.connect()
		const baseDeDatos = await client.db('series')
		const coleccion = await baseDeDatos.collection('series')
		const result = await modeloSerie.findById(id)
		const nombreSeries = result.nombreSerie
		
		const eliminarCapitulo = await coleccion. updateOne(
		  {"nombreSerie": nombreSeries } ,
		  { $pull: { [temporada]:  capitulo } }
		//   //
		//   //{ $push: { [t]: p } }
		  //    { $set: { "temporada1.1": "" } }
		 );

		
	} catch(e) {
		// statements
		console.log(e);
	} finally {
		// statements
	}
}

module.exports = controller
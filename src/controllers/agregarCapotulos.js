const controller = {}
const modeloSerie = require('../modelos/series.js')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)
controller.agragarCapitulos = async function (capitulo,id) {

	// const result = await modeloSerie.findByIdAndUpdate("6721877c5836d50468c84b9d",
	// 	{$push:{ temporada1:  ["capitulo3"] }} 
	// )
		// const result = await	modeloSerie.updateOne(
		//   { _id: ("6721877c5836d50468c84b9d") },
		//   { $push: { temporada1: "programar" } }
		// );
		
	try {
		const conexion = await client.connect()
		const baseDeDatos = await client.db('series')
		const coleccion = await baseDeDatos.collection('series')
		//const result = await coleccion.findOne({"nombreSerie":'merlina'})
		const t = 'temporada1'
		const p = "capitulo2"
		const result = await coleccion.updateOne(
		  {"nombreSerie": 'merlina' } ,
		  { $push: { [t]: p } }
		);
		console.log(result)
	} catch(e) {
		// statements
		console.log(e);
	} finally {
		// statements
	}
}

module.exports = controller
const controller = {}
const modeloSerie = require('../modelos/series.js')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)
controller.agragarCapitulos = async function (capitulo,id,temporada) {
		
	try {
		const conexion = await client.connect()
		const baseDeDatos = await client.db('series')
		const coleccion = await baseDeDatos.collection('series')
		const result = await modeloSerie.findById(id)
		const agregarCapitulo = await coleccion.updateOne({"nombreSerie": result.nombreSerie },
		  { $push: { [temporada]: capitulo } }
		);
		
	} catch(e) {
		// statements
		console.log(e);
	} finally {
		// statements
	}
}

module.exports = controller
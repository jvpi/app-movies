const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)

controller.insertarSerie = async function(req,res) {
	try {
		const {nombreSerie,nombreCapitulo,nombreImg,descripcion} = req.body
		const newSerie = new modeloSerie({
				nombreSerie:nombreSerie,
				nombreImg:nombreImg,
				descripcion:descripcion
			})
		const result = await newSerie.save()
		agragarTemporada(nombreSerie,nombreCapitulo)
		res.redirect('/admin')
	} catch(e) {
		res.redirect('/admin')
		console.log(e)
	} finally {
	}
	

}

async function agragarTemporada(nombre,capitulo) {
	try {
		const conexion = await client.connect()
		const baseDeDatos = client.db('series')
		const coleccion = baseDeDatos.collection('series')
		const result = await coleccion.findOne({"nombreSerie":nombre})
		const nombreSerie = result.nombreSerie
		const temporada ='temporada1'
		const result1 = await coleccion.updateOne( {"nombreSerie": nombreSerie },
  		{ $set: {[temporada] : [capitulo] } })
	} catch(e) {
		
		console.log(e);
	} finally {
		// statements
	}
}

module.exports = controller
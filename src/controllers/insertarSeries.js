const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const {URI} = process.env
const client = new MongoClient(URI)

controller.insertarSerie = async function(req,res) {
	try {
		const {nombreSerie,nombreCapitulo,
			nombreImg,descripcion,nombreVideo,
			categoria1,categoria2,categoria3,
			puntuacion
		} = req.body
		
		const newSerie = new modeloSerie({
				nombreSerie,
				nombreImg,
				descripcion,
				nombreVideo,
				categorias:categoriaArray (categoria1,categoria2,categoria3),
				puntuacion
			})
		
		await newSerie.save()
		agragarTemporada(nombreSerie,nombreCapitulo)
		res.redirect('/admin')
	} catch(e) {
		res.redirect('/admin')
		console.log(e)
	} finally {
	}
	

}
function categoriaArray (categoria1,categoria2,categoria3) {
	const array = [categoria1,categoria2,categoria3]
	return array
	
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
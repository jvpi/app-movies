const pool = require('./db.js')
const controller = {}

controller.insertarSerie = async function(req,res) {
	
	const {nombreSerie,nombreImg,extensionVideo,descripcion,temporada} = req.body
	const sentencia =  'insert into serie (nombre,  nombreextension,descripcion,temporada,nombreimg) VALUES($1, $2, $3,$4,$5)'
	const valores = [nombreSerie,extensionVideo,descripcion,temporada,nombreImg]
	const insertar = await pool.query(sentencia,valores)
	res.redirect('/admin')
}

module.exports = controller
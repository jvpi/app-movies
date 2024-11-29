const {Schema, model} = require('mongoose')
const mongoose = require('mongoose');
require('dotenv').config()

const {SERIES_MONGODB_HOST,SERIES_MONGODB_DATABASE} = process.env
const MONGODB_URI_SERIES = `mongodb://${SERIES_MONGODB_HOST}/${SERIES_MONGODB_DATABASE}`
const db1 = mongoose.createConnection(MONGODB_URI_SERIES);

const serieSchema = new Schema({
	nombreSerie:{
		type:String,
		 required: true,
    	 unique: true
	},
	//  temporadas:{
	// 	type: [],
	// 	required: true,
    	
	// },
	nombreImg:{
		type:String,
		 required: true,
    	// unique: true
	},
	descripcion:{
		type:String,
		required: true
	}
	// plataforma:{
	// 	type:String,
	// 	required: true
	// }
},{timeStamp:true})


module.exports =  db1.model('series',serieSchema)
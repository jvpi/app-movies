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
	nombreImg:{
		type:String,
		required: true,
	},
	descripcion:{
		type:String,
		required: true
	},
	nombreVideo:{
		type:String,
		required: true,
    	
	},
	 categorias:{
		type: [],
		required: true,
	},
	puntuacion:{
		type:String,
		required: true,
    	
	}
},{timeStamp:true})


module.exports =  db1.model('series',serieSchema)
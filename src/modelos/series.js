const {Schema, model} = require('mongoose')

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


module.exports =  model('series',serieSchema)
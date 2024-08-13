const {Schema, model} = require('mongoose')

const serieSchema = new Schema({
	titulo:{
		type:String,
		required: true,
    	unique: true
	},
	nombreImg:{
		type:String,
		required: true,
    	unique: true
	},
	descripcion:{
		type:String,
		required: true,
    	unique: true
	}
},{timeStamp:true})

module.exports =  model('serie',serieSchema)
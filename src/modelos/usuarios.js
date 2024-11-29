const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
require('dotenv').config()

const {SERIES_MONGODB_HOST,USUARIOS_MONGODB_DATABASE} = process.env
const MONGODB_URI_SERIES = `mongodb://${SERIES_MONGODB_HOST}/${USUARIOS_MONGODB_DATABASE}`
const db1 = mongoose.createConnection(MONGODB_URI_SERIES);
const usuariosSchema = new Schema({
	correo:{
		type:String,
		 required: true,
    	 unique: true
	},
	password:{
		type:String,
		 required: true,
    	
	}
},{timeStamp:true})
usuariosSchema.methods.encryptPassword = async function (password) {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password,salt)
}

usuariosSchema.methods.matchPassword = async function (password) {
	await bcrypt.compare(password, this.password)

}
module.exports =  db1.model('usuarios',usuariosSchema)
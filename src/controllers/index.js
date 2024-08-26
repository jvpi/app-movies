const controller = {}
const db = require('./db.js')
const modeloSerie = require('../modelos/series.js')
controller.paginaInicio = async function(req, res, next) {
  try {
    const series = await modeloSerie.find()
    
    res.render('vistaInicio',{series});
  } catch(e) {
    const series = []
    res.render('vistaInicio',{series});
 
  }
 
 // if (condition) {
 //   // statement
 // } else {
 //   // statement
 // }
  
}



module.exports = controller;

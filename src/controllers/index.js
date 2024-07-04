const controller = {}
// const {Pool} = require('pg')
const pool = require('./db.js')
async function consulta (){
const result = await pool.query('select * from serie')
  console.log(result)
}

consulta ()
const series = [{
  nombre:'bojack horseman',
  img:'bojack.jpg',
  referencia:'../../series/bocjak/temo1/bocjak-1.mp4',
  descripcion:'Comedia,drama',
  temporada:'temporada-1',
  urlSerie:'bojack'
}]
controller.paginaInicio = function(req, res, next) {
  res.render('vistaInicio', { series});
  
}
function x(){

}

module.exports = controller;

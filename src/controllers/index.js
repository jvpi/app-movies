const controller = {}
const db = require('./db.js')
const modeloSerie = require('../modelos/series.js')
// const x = [
//   {
//     _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
//     nombreSerie: 'chernobyl',
//     nombreImg: 'bojack.jpg',
//     descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
//     nombreVideo: 'capitulo1.mkv',
//     categorias: [ 'accion', 'drama', 'suspenso' ],
//     puntuacion: '10',
//     __v: 0,
//     temporada1: [ 'capitulo1' ]
//   }
// ]
controller.paginaInicio = async function(req, res, next) {
  try {
    const series = await modeloSerie.find()
    console.log(series)
    res.render('vistaInicio',{series});
  } catch(e) {
    const series = []
    res.render('vistaInicio',{series});
 
  }
 
  
}



module.exports = controller;

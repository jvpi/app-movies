const controller = {}
const client = require('./db.js')
const modeloSerie = require('../modelos/series.js')

// const series = [{
//     // _id: ObjectId('66b8253e0f53f59c9a228fb5'),
//     nombreSerie: 'bojack',
//     temporada1: [ 'bocjak-1.mp4', 'capitulo2' ]
//   }]

  //    
controller.series = async function(req, res, next) {
  try {
    const series = await modeloSerie.find()
    console.log(series)
    res.render('vistaSeries',{series} );
  } catch(e) {
    const series = []
    res.render('vistaSeries',{series});
  } finally {
     // await client.close();
  }

}

module.exports = controller;


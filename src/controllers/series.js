const controller = {}
const client = require('./db.js')
const modeloSerie = require('../modelos/series.js')
   
controller.series = async function(req, res, next) {
  try {
    const series = await modeloSerie.find()
    res.render('vistaSeries',{series} );
  } catch(e) {
    const series = []
    res.render('vistaSeries',{series});
  } finally {
     // await client.close();
  }

}

module.exports = controller;


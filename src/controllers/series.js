const controller = {}
const client = require('./db.js')
const modeloSerie = require('../modelos/series.js')

 console.log(modeloSerie())
//   let i = 0
// for (propiedad in series[0]) {

//    if (Array.isArray(series[0][propiedad])) {

//      i++
//      console.log('temporada' + i)
//       for (let temporada of series[0][propiedad]) {

//             console.log( temporada)
            
//         }
     
//   }
 
// }




  //    
controller.series = async function(req, res, next) {
  try {
    await client.connect()
    const db = client.db('webseries')
    const coleccion = db.collection('serie')
    const series = await coleccion.find().toArray()
   
    res.render('vistaSeries',{series} );
  } catch(e) {
    
    console.log(e);
  } finally {
     await client.close();
  }

}


 
module.exports = controller;


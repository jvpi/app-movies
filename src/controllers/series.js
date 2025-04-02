const controller = {}
const client = require('./db.js')
const modeloSerie = require('../modelos/series.js')
   
controller.series = async function(req, res, next) {
  const {nombreSerie,temporada,capitulo} = req.params

  let newCadenaTemporada = temporada.replace('-','')
   
   let x = [ 'temporada1', 'temporada2','temporada6','temporada3','temporada15','temporada10' ]
   function compararTemporadas(a, b) {
    // Extraemos el número de la temporada de cada cadena
    const numA = parseInt(a.replace('temporada', ''));
    const numB = parseInt(b.replace('temporada', ''));

    // Comparamos los números
    
    return numA - numB;
  }
  x.sort(compararTemporadas);
    
    console.log(x)
    const resultado = await modeloSerie.find({"nombreSerie":nombreSerie})
    
    const serie = resultado[0]
    const cantidadTotalCapitulos = serie._doc[newCadenaTemporada]
    
    const  obtenerTotalTemporadas = cantidadTotalTemporadas (serie._doc)
    
    const indexCapitulo = cantidadTotalCapitulos.indexOf(capitulo)
    const capituloSeleccionado = cantidadTotalCapitulos[indexCapitulo]
  
    try {
       res.render('vistaSeries',{
        serie,temporada,
        cantidadTotalCapitulos,capituloSeleccionado,
        obtenerTotalTemporadas
     
      });
    }catch(e) {
   
    const serie = []
    res.render('vistaSeries',{serie});
  } finally {
     // await client.close();
  }
  } 


function cantidadTotalTemporadas (serie) {
  return Object.keys(serie).filter(function (elemento) {
     return elemento.includes('temporada')
    })
}


module.exports = controller;


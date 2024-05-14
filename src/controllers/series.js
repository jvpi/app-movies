const controller = {}

const series = [
  {
    nombre:'bojack horseman',
    referencia:'../../series/bocjak/temo1/bocjak-1.mp4',
    descripcion:'Comedia,drama',
    temporada:'temporada1',
    capitulos:['bocjak-1','capitulo 12']
  },
  {
    nombre:'bojack horseman',
    referencia:'../../series/bocjak/temo1/bocjak-1.mp4',
    descripcion:'Comedia,drama',
    temporada:'temporada2',
    capitulos:['capitulo 1','capitulo 2']
  },
  {
    nombre:'bojack horseman',
    referencia:'../../series/bocjak/temo1/bocjak-1.mp4',
    descripcion:'Comedia,drama',
    temporada:'temporada2',
    capitulos:['capitulo 1','capitulo 2']
  }

]

controller.series = function(req, res, next) {
  res.render('vistaSeries',{series} );
}


module.exports = controller;


const controller = {}
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


module.exports = controller;

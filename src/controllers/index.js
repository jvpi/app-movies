const controller = {}
const pool = require('./db.js')
controller.paginaInicio = async function(req, res, next) {
  const {rows} = await pool.query('select * from serie')
  res.render('vistaInicio', { rows});
  
}



module.exports = controller;

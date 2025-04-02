const db = require('./db.js')
const controller = {}
const modeloSerie = require('../modelos/series.js')
controller.renderVistaAdmi = async function (req,res){

	// modeloSerie.updateOne({ "nombreSerie": 'bojack'  }, { $set: { edad: 30 } })
    // .then(result => {
    //     console.log(result);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
	
	
	try {

		const series = await modeloSerie.find()

		res.render('vistaAdmin',{series})
	} catch(e) {
		const series = []
		res.render('vistaAdmin',{series})
		console.log(e);
	}
	
}


module.exports = controller
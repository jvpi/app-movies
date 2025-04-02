const controller = {}
const db = require('./db.js')
const modeloSerie = require('../modelos/series.js')



controller.paginaInicio = async function(req, res, next) {
 
 const longitudArrayHijos = 7
// let arraySeries = [
//  1,2,3,4,5,6,7,8,9,10,11,12,13,14 
  
// ]
  let resulatdoArraySeries = [
  {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'blackmirror.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]
  },  {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]
  },{
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]
  }, {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  , {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }, {
   // _id: new ObjectId('679a4eeaec5f8e2ab60ba75b'),
    nombreSerie: 'chernobyl',
    nombreImg: 'bojack.jpg',
    descripcion: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, amet corrupti. Architecto maiores necessitatibus soluta enim officia ab,',
    nombreVideo: 'capitulo1.mkv',
    categorias: [ 'accion', 'drama', 'suspenso' ],
    puntuacion: '10',
    __v: 0,
    temporada1: [ 'capitulo1' ]

  }
  
]
let copiaArraySeries = [...resulatdoArraySeries]
let arraySeries = []

  try {
      if (resulatdoArraySeries.length > 14) {
        while (arraySeries.length < 21) {
        let numAleatorio = Math.floor(Math.random() * resulatdoArraySeries.length)
           arraySeries.push(resulatdoArraySeries.splice(numAleatorio,1)[0])
        } 
     }
   
const arrayNueno3 = arraySeries.filter(function (elemento) {
  return elemento != undefined
})
let arrayLonguitud7 = []
const almacenDeArrays = []
if (arrayNueno3.length !== 0) {
    while (arrayNueno3.length > 0) {
      arrayLonguitud7.push(arrayNueno3.splice(0,1)[0])
      if (arrayLonguitud7.length == longitudArrayHijos ) {
       almacenDeArrays.push(arrayLonguitud7)
       arrayLonguitud7 = []
      }
  }
 
} 
if (copiaArraySeries.length <= 14) {
    while (resulatdoArraySeries.length > 0) {
      arrayLonguitud7.push(resulatdoArraySeries.splice(0,1)[0])
      if (arrayLonguitud7.length == longitudArrayHijos ) {
       almacenDeArrays.push(arrayLonguitud7)
       arrayLonguitud7 = []
      }
  }
  
}

    const series = await modeloSerie.find()
    console.log(series)
   
    res.render('vistaInicio',{almacenDeArrays});
  } catch(e) {
    const series = []
    res.render('vistaInicio',{series});
 
  }
 
  
}


module.exports = controller;

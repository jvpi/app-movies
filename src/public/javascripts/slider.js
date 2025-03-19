const contentImgSerie = document.querySelectorAll('.content-img-serie')
const contentImgSerie1 = document.querySelectorAll('.content-img-serie1')
const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
const galeriaSerie = document.querySelectorAll('.galeria-series')
const contentGaleriaSerie = Array.from(document.querySelectorAll('.content-galeria-series')) 
const slider = document.getElementById('slider')
const slider1 = document.getElementById('slider1')
const btnsRight = Array.from(document.querySelectorAll('.icon-circle-right')) 
const btnLeft = document.getElementById('left')
const r1 = document.getElementById('right1')
const r2 = document.getElementById('right')


// for (let i = 0; i < galeriaSerie.length; i++) {
// 	galeriaSerie[i].insertAdjacentElement('afterbegin',contentImgSerieLast)
// }

for (var i = 0; i < contentGaleriaSerie.length; i++) {
	contentGaleriaSerie[i].addEventListener('click',function (e) {
		const indice = contentGaleriaSerie.indexOf(this)
		let x = Array.from(this.children)
		let z = null
		for (var i = 0; i < x.length; i++) {
			if (x[i].className == 'galeria-series') {
				z = x[i]
			}
			
		}
		
	
		//console.log(contentGaleriaSerie.indexOf(z.parentNode)  )
		for (var i = 0; i < z.children.length; i++) {
			z.children[i].numero =  `${indice}${i}`   
		
	
		}
		
		e.target.numero = `${indice}${btnsRight.indexOf(e.target)}`
		const target = e.target
		if (target.classList.contains('icon-circle-right')) {	
			const userAgent = navigator.userAgent.toLowerCase();
		 	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
		 	let contentImgSerieFirist = z.children[0]
			for (var i = 0; i < z.children.length; i++) {
		 			z.children[i].style.left = '-210%' 
						z.children[i].style.transition = 'all .5s'
						setTimeout(function () {
							z.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
							for (let j = 0; j < z.children.length; j++) {
								z.children[j].style.transition = 'none'
								z.children[j].style.left = '-104%'		 
							}
						
					},500)
				}
			}

			if (target.classList.contains('icon-circle-left')) {	
				const userAgent = navigator.userAgent.toLowerCase();
			 	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
			 	let contentImgSerieLast = z.children[contentImgSerie.length - 1]
			 	//const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
			 	console.log(z.children[0])
			 	console.log(document.querySelectorAll('.content-img-serie')[0])
				for (var i = 0; i < z.children.length; i++) {
			 		z.children[i].style.left = '0%' 
						z.children[i].style.transition = 'all .5s'
						setTimeout(function () {
							z.insertAdjacentElement('afterbegin',contentImgSerieLast)
							for (let j = 0; j < z.children.length; j++) {
									z.children[j].style.transition = 'none'
									z.children[j].style.left = '-104%'		 
							}
							
					},500)
				}
			}

	})
}
// for (let i = 0; i < contentImgSerie.length; i++) {
// 				contentImgSerie[i].style.left = '0%' 
// 				contentImgSerie[i].style.transition = 'all .5s'
// 				setTimeout(function () {
// 					slider.insertAdjacentElement('afterbegin',contentImgSerieLast)
// 					for (let j = 0; j < contentImgSerie.length; j++) {
// 						contentImgSerie[j].style.transition = 'none'
// 						contentImgSerie[j].style.left = '-104%'	
// 					}
					
// 				},500)
// 			}
		 	
			//let contentImgSerieFirist = document.querySelectorAll('.content-img-serie')[0]
			// if (test) {
			// 	 	for (let i = 0; i < contentImgSerie.length; i++) {

			// 			contentImgSerie[i].style.left = '-210%' 
			// 			contentImgSerie[i].style.transition = 'all .5s'
			// 			setTimeout(function () {
			// 				slider.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
			// 				for (let j = 0; j < contentImgSerie.length; j++) {
			// 					contentImgSerie[j].style.transition = 'none'
			// 					contentImgSerie[j].style.left = '-101%'		 
			// 				}			
			// 		},500)
			// 	}
			// }else {
			// 		console.log(contentImgSerie.length)
			// 	for (let i = 0; i < contentImgSerie.length; i++) {

			// 			contentImgSerie[i].style.left = '-210%' 
			// 			contentImgSerie[i].style.transition = 'all .5s'
			// 			setTimeout(function () {
			// 				slider.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
			// 				for (let j = 0; j < contentImgSerie.length; j++) {
			// 					contentImgSerie[j].style.transition = 'none'
			// 					contentImgSerie[j].style.left = '-104%'		 
			// 				}
						
			// 		},500)


			// 		// z.children[i].style.left = '-210%' 
			// 		// 	z.children[i].style.transition = 'all .5s'
			// 		// 	setTimeout(function () {
			// 		// 		galeriaSerie[0].insertAdjacentElement('beforeEnd',contentImgSerieFirist)
			// 		// 		for (let j = 0; j < z.children.length; j++) {
			// 		// 			z.children[j].style.transition = 'none'
			// 		// 			z.children[j].style.left = '-104%'		 
			// 		// 		}
						
			// 		// },500)
						
			// 	}


			// 	// for (let i = 0; i < contentImgSerie.length; i++) {

				
			// 	// if (contentImgSerie[i].numero[0] == indice) {
			// 	// 	contentImgSerie[i].style.left = '-210%' 
			// 	// 		contentImgSerie[i].style.transition = 'all .5s'
			// 	// 		setTimeout(function () {
			// 	// 			slider.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
			// 	// 			for (let j = 0; j < contentImgSerie.length; j++) {
			// 	// 				contentImgSerie[j].style.transition = 'none'
			// 	// 				contentImgSerie[j].style.left = '-104%'		 
			// 	// 			}
						
			// 	// 	},500)
			// 	// }
						
			// 	// }
			// }
			
		//}


// r1.addEventListener('click', function () {
	
// 	let contentImgSerieFirist = document.querySelectorAll('.content-img-serie')[0]
// 	for (let i = 0; i < contentImgSerie.length; i++) {

// 						contentImgSerie[i].style.left = '-210%' 
// 						contentImgSerie[i].style.transition = 'all .5s'
// 						setTimeout(function () {
// 							//slider
// 							galeriaSerie[0].insertAdjacentElement('beforeEnd',contentImgSerieFirist)
// 							for (let j = 0; j < contentImgSerie.length; j++) {
// 								contentImgSerie[j].style.transition = 'none'
// 								contentImgSerie[j].style.left = '-101%'		 
// 							}			
// 					},500)
// 				}

// })
// r2.addEventListener('click', function () {
	
// 	let contentImgSerieFirist = document.querySelectorAll('.content-img-serie1')[0]
// 				for (let i = 0; i < contentImgSerie.length; i++) {

// 						contentImgSerie1[i].style.left = '-210%' 
// 						contentImgSerie1[i].style.transition = 'all .5s'
// 						setTimeout(function () {
// 							slider1.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
// 							for (let j = 0; j < contentImgSerie1.length; j++) {
// 								contentImgSerie1[j].style.transition = 'none'
// 								contentImgSerie1[j].style.left = '-101%'		 
// 							}			
// 					},500)
// 				}

// })


// btnLeft.addEventListener('click', function () {
// 	const userAgent = navigator.userAgent.toLowerCase();
//  	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
// 	const contentImgSerie = document.querySelectorAll('.content-img-serie')
// 	const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
//   if (test) {
// 		 	for (let i = 0; i < contentImgSerie.length; i++) {
// 				contentImgSerie[i].style.left = '8%' /*0 y 8*/
// 				contentImgSerie[i].style.transition = 'all .5s'
// 				setTimeout(function () {
// 					slider.insertAdjacentElement('afterbegin',contentImgSerieLast)
// 					for (let j = 0; j < contentImgSerie.length; j++) {
// 						contentImgSerie[j].style.transition = 'none'
// 						contentImgSerie[j].style.left = '-101%'		/*101 y 104 aqui esta el error*/
// 					}
					
// 				},500)
// 			}
// 	}else {
// 			for (let i = 0; i < contentImgSerie.length; i++) {
// 				contentImgSerie[i].style.left = '0%' 
// 				contentImgSerie[i].style.transition = 'all .5s'
// 				setTimeout(function () {
// 					slider.insertAdjacentElement('afterbegin',contentImgSerieLast)
// 					for (let j = 0; j < contentImgSerie.length; j++) {
// 						contentImgSerie[j].style.transition = 'none'
// 						contentImgSerie[j].style.left = '-104%'	
// 					}
					
// 				},500)
// 			}
// 	}

// })


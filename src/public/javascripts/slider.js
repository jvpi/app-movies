const contentImgSerie = document.querySelectorAll('.content-img-serie')
const contentImgSerie1 = document.querySelectorAll('.content-img-serie1')
const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
const galeriaSerie = document.querySelectorAll('.galeria-series')
const contentGaleriaSerie = Array.from(document.querySelectorAll('.content-galeria-series')) 
const btnsRight = Array.from(document.querySelectorAll('.icon-circle-right')) 




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

			setTimeout(function () {
			// 	if (target.classList.contains('icon-circle-left')) {	
			// 	const userAgent = navigator.userAgent.toLowerCase();
			//  	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
			//  	let contentImgSerieLast = z.children[z.children.length -1]
			 	
			// 	for (var i = 0; i < z.children.length; i++) {
			//  		z.children[i].style.left = '0%' 
			// 			z.children[i].style.transition = 'all .5s'
			// 			setTimeout(function () {
			// 				z.insertAdjacentElement('afterbegin',contentImgSerieLast)
			// 				for (let j = 0; j < z.children.length; j++) {
			// 						z.children[j].style.transition = 'none'
			// 						z.children[j].style.left = '-104%'		 
			// 				}
							
			// 		},500)
			// 	}
			// }
			}, 500)
			if (target.classList.contains('icon-circle-left')) {	
				const userAgent = navigator.userAgent.toLowerCase();
			 	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
			 	let contentImgSerieLast = z.children[z.children.length -1]
			 	
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



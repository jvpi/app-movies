const contentImgSerie = document.querySelectorAll('.content-img-serie')
const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
const slider = document.getElementById('slider')
const btnRight = document.getElementById('right')
const btnLeft = document.getElementById('left')

slider.insertAdjacentElement('afterbegin',contentImgSerieLast)

btnRight.addEventListener('click', function () {
	const userAgent = navigator.userAgent.toLowerCase();
 	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
	let contentImgSerieFirist = document.querySelectorAll('.content-img-serie')[0]
	if (test) {
		 	for (let i = 0; i < contentImgSerie.length; i++) {
				contentImgSerie[i].style.left = '-210%' 
				contentImgSerie[i].style.transition = 'all .5s'
				setTimeout(function () {
					slider.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
					for (let j = 0; j < contentImgSerie.length; j++) {
						contentImgSerie[j].style.transition = 'none'
						contentImgSerie[j].style.left = '-101%'		 
					}
				
			},500)
		}
	}else {
		for (let i = 0; i < contentImgSerie.length; i++) {
				contentImgSerie[i].style.left = '-210%' 
				contentImgSerie[i].style.transition = 'all .5s'
				setTimeout(function () {
					slider.insertAdjacentElement('beforeEnd',contentImgSerieFirist)
					for (let j = 0; j < contentImgSerie.length; j++) {
						contentImgSerie[j].style.transition = 'none'
						contentImgSerie[j].style.left = '-104%'		 
					}
				
			},500)
		}
	}

})

btnLeft.addEventListener('click', function () {
	const userAgent = navigator.userAgent.toLowerCase();
 	const test = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
	const contentImgSerie = document.querySelectorAll('.content-img-serie')
	const contentImgSerieLast = contentImgSerie[contentImgSerie.length - 1]
  if (test) {
		 	for (let i = 0; i < contentImgSerie.length; i++) {
				contentImgSerie[i].style.left = '8%' /*0 y 8*/
				contentImgSerie[i].style.transition = 'all .5s'
				setTimeout(function () {
					slider.insertAdjacentElement('afterbegin',contentImgSerieLast)
					for (let j = 0; j < contentImgSerie.length; j++) {
						contentImgSerie[j].style.transition = 'none'
						contentImgSerie[j].style.left = '-101%'		/*101 y 104 aqui esta el error*/
					}
					
				},500)
			}
	}else {
			for (let i = 0; i < contentImgSerie.length; i++) {
				contentImgSerie[i].style.left = '0%' 
				contentImgSerie[i].style.transition = 'all .5s'
				setTimeout(function () {
					slider.insertAdjacentElement('afterbegin',contentImgSerieLast)
					for (let j = 0; j < contentImgSerie.length; j++) {
						contentImgSerie[j].style.transition = 'none'
						contentImgSerie[j].style.left = '-104%'	
					}
					
				},500)
			}
	}

})


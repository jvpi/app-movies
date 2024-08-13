const contentVideo = document.getElementById('content-video')
const capitulos = document.querySelectorAll('.capitulo')
const btnTemporada = document.querySelectorAll('.temporada')
let temporada = ''
let nav = document.getElementById('nav')
let iconoMenu = document.getElementById('icon-menu')
function nombreSerie() {
	let pathArray = window.location.pathname.split('/')
	let result = pathArray.filter(function (elemento) {
		return elemento != '' && elemento != 'series'
	})
	return result[0]
}

function obtenerTemporada() {
	btnTemporada.forEach(function (elemento) {
		elemento.addEventListener('click',function () {
			temporada = this.textContent.trim()
		})
	})
	if (temporada != '') {
		return temporada
	}
	
}

function  crearVideoTemplate () {
	capitulos.forEach(function(elemento) {
		elemento.addEventListener('click',function () {
			let nombreCapitulos = this.textContent.trim()
			if (temporada != null) {
				 ocultarMenuResposive ()
				 setTimeout(function () {
				 		contentVideo.innerHTML = ` 
						<video src="/series/${nombreSerie()}/${obtenerTemporada()}/${nombreCapitulos}" 
							controls id="series-capitulos">
						</video> 
					`
				 },300)
			
			}
		})
	})
	
}
function ocultarMenuResposive () {
	let w = window.innerWidth;
	if (w < 420) {
		nav.classList.remove('aparecer-menu')
		iconoMenu.style.display= 'inline-block'
	}
}
 obtenerTemporada()
 crearVideoTemplate()





let nav = document.getElementById('nav')
let iconoCross = document.getElementById('icon-cross')
let iconoMenu = document.getElementById('icon-menu')
let body = document.getElementById('body')
let capitulos = document.querySelectorAll('.capitulos')
const lista = Array.from(document.querySelectorAll('.lista')) 
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


function aparecerMenu() {

	iconoMenu.addEventListener('click', function (argument) {
		nav.classList.add('aparecer-menu')
		iconoCross.style.display = 'inline-block'
		iconoMenu.style.display = 'none'
		
	})
}

function ocultarMenu() {
	body.addEventListener('click', function (e) {

		if ( e.target.className == 'capitulos' || e.target.className == 'icon-cross' ) {
			iconoCross.style.display = 'none'
			nav.classList.remove('aparecer-menu')
			iconoMenu.style.display= 'inline-block'

		let w = window.innerWidth;
			
		lista.forEach(function (elemento) {	
			if (w < 420) {
				lista.forEach(function (elemento) {
					elemento.classList.remove('activo')
				})
			}

		})
		}
	})
	
}

aparecerMenu()
ocultarMenu()


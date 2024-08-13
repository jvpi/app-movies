let nav = document.getElementById('nav')
let iconoCross = document.getElementById('icon-cross')
let iconoMenu = document.getElementById('icon-menu')
let body = document.getElementById('body')
let capitulos = document.querySelectorAll('.capitulos')
const lista = Array.from(document.querySelectorAll('.lista')) 
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


function aparecerMenuResponsive() {

	iconoMenu.addEventListener('click', function (argument) {
		nav.classList.add('aparecer-menu')
		iconoMenu.style.display = 'none'
	})
}

function ocultarMenuResponsive() {
	body.addEventListener('click', function (e) {
// e.target.className == 'capitulo' ||
		if ( e.target.className == 'icon-cross' ) {
			nav.classList.remove('aparecer-menu')
			iconoMenu.style.display= 'inline-block'
			menuOcultoPantallaCompleta ()
		}
	})
	
}
const ul = document.getElementById('ul')
function menuVisiblePantallaCompleta () {
	const iconMenuHamburguesa = document.getElementById('icon-menu-desplegable')
	
	iconMenuHamburguesa.addEventListener('click',function () {
		nav.classList.add('nav-visible')
	})
}
function menuOcultoPantallaCompleta () {
	nav.classList.remove('nav-visible')
}
aparecerMenuResponsive()
ocultarMenuResponsive()
menuVisiblePantallaCompleta ()



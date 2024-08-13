let elementoBuscador = document.getElementById('buscador-vista-serie')
let elementoBotonBuscar = document.getElementById('boton-buscar')
let elementoEnlaceInicio = document.getElementById('enlace-inicio')
let elementoContentBuscador = document.getElementById('content-buscador')
let elementoContentFlechaIzq = document.getElementById('content-flecha-izq')
let menuHamburguesa = document.getElementById('menu-hamburguesa')
elementoBuscador.addEventListener('focus', function (argument) {
	this.classList.add('border-color-buscador')
})

elementoBuscador.addEventListener('blur', function (argument) {
	this.classList.remove('border-color-buscador')
})

/*bucador resposive*/
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
	aparecerBuscador()
	ocultarBuscador()
}

function aparecerBuscador() {
	elementoBotonBuscar.addEventListener('click',function (argument) {
		this.classList.add('boton-buscar-left-top')
		// this.style.right = '17%'
		// this.style.top = '2%'
		elementoEnlaceInicio.classList.add('ocultar-enlace')
		elementoBuscador.style.display = 'inline'
		//elementoContentBuscador.classList.add('right')
		//elementoContentBuscador.style.width = '79%'
		elementoContentBuscador.style.right = '0'
		elementoContentFlechaIzq.classList.remove('ocultar-conten-flecha-izq')
		elementoContentFlechaIzq.classList.add('content-flecha-izq')
		menuHamburguesa.classList.add('ocultar-menu-hamburguesa')
	})
	
}
function ocultarBuscador() {
		elementoContentFlechaIzq.addEventListener('click',function () {
			elementoBotonBuscar.classList.remove('boton-buscar-left-top')
			elementoEnlaceInicio.classList.remove('ocultar-enlace')
			elementoBuscador.style.display = 'none'
			elementoContentBuscador.style.width = 'auto'
			elementoContentBuscador.style.right = '28%'
			this.classList.add('ocultar-conten-flecha-izq')
			this.classList.remove('content-flecha-izq')
			menuHamburguesa.classList.remove('ocultar-menu-hamburguesa')
		})
		
	}

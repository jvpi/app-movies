let elementoBuscador = document.getElementById('buscador')
let elementoBotonBuscar = document.getElementById('boton-buscar')
let elementoEnlaceInicio = document.getElementById('enlace-inicio')
let elementoContentBuscador = document.getElementById('content-buscador')
let elementoContentFlechaIzq = document.getElementById('content-flecha-izq')
elementoBuscador.addEventListener('focus', function (argument) {
	this.classList.add('border-color-buscador')
	
})

elementoBuscador.addEventListener('blur', function (argument) {
	this.classList.remove('border-color-buscador')
	
})

/*bucador resposive*/
function aparecerBuscador() {
	elementoBotonBuscar.addEventListener('click',function (argument) {
		this.classList.remove('boton-buscar-resposive')
		elementoEnlaceInicio.classList.add('ocultar-enlace')
		elementoBuscador.style.display = 'inline'
		elementoContentBuscador.classList.add('right')
		elementoContentFlechaIzq.classList.remove('ocultar-conten-flecha-izq')
		elementoContentFlechaIzq.classList.add('content-flecha-izq')
	})
	
}
function ocultarBuscador() {
	elementoContentFlechaIzq.addEventListener('click',function () {
		elementoBotonBuscar.classList.add('boton-buscar-resposive')
		elementoEnlaceInicio.classList.remove('ocultar-enlace')
		elementoBuscador.style.display = 'none'
		elementoContentBuscador.classList.remove('right')
		this.classList.add('ocultar-conten-flecha-izq')
		this.classList.remove('content-flecha-izq')
	})
	
}
aparecerBuscador()
ocultarBuscador()

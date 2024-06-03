let inputBuscador = document.getElementById('buscador')
let btnBuscador = document.getElementById('boton-buscador-vista-inicio')
let elementoEnlaceInicio = document.getElementById('enlace-inicio')
let elementoContentBuscador = document.getElementById('content-buscador')
let elementoContentFlechaIzq = document.getElementById('content-flecha-izq')
inputBuscador.addEventListener('focus', function (argument) {
	this.classList.add('border-color-buscador')
	
})

inputBuscador.addEventListener('blur', function (argument) {
	this.classList.remove('border-color-buscador')
	
})

/*bucador resposive*/
function aparecerBuscador() {
	btnBuscador.addEventListener('click',function (argument) {
		inputBuscador.classList.remove('buscador-oculto')
		this.classList.remove('boton-buscador-vista-inicio')
		this.marginLeft = '0'
		elementoEnlaceInicio.classList.add('ocultar-enlace')
		elementoContentBuscador.classList.add('content-buscador1')
		elementoContentFlechaIzq.classList.remove('ocultar-conten-flecha-izq')
		
	})
	
}
function ocultarBuscador(argument) {
	elementoContentFlechaIzq.addEventListener('click',function () {
		this.classList.add('ocultar-conten-flecha-izq')
		inputBuscador.classList.add('buscador-oculto')
		btnBuscador.classList.add('boton-buscador-vista-inicio')
		elementoEnlaceInicio.classList.remove('ocultar-enlace')

	})
}
ocultarBuscador()
aparecerBuscador() 
let btnBuscador = document.getElementById('boton-buscador-vista-inicio')
let elementoEnlaceInicio = document.getElementById('enlace-inicio')
let elementoContentBuscador = document.getElementById('content-buscador')
let elementoContentFlechaIzq = document.getElementById('content-flecha-izq')
let inputBuscador = document.getElementById('buscador')

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	/*bucador resposive*/
if (isMobile) {
	ocultarBuscador()
	aparecerBuscador() 
}

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




let btnBuscador = document.getElementById('boton-buscador-vista-inicio')
let elementoEnlaceInicio = document.getElementById('enlace-nombre-app')
//let elementoContentBuscador = document.getElementById('content-buscador')
let elementoContentFlechaIzq = document.getElementById('content-flecha-izq')
let inputBuscador = document.getElementById('buscador')
const $contentEnlaceInicio = document.getElementById('content-enlace-inicio')

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	/*bucador resposive*/
if (isMobile) {
	ocultarBuscador()
	aparecerBuscador() 
}

	function aparecerBuscador() {
		btnBuscador.addEventListener('click',function (argument) {
			inputBuscador.classList.remove('buscador-oculto')
			inputBuscador.style.setProperty('width','90%')
			this.classList.remove('boton-buscador-vista-inicio')
			this.marginLeft = '0'
			elementoEnlaceInicio.classList.add('ocultar-enlace')
			$contentEnlaceInicio.classList.add('content-link-vista-inicio-width')
			elementoContentFlechaIzq.classList.remove('ocultar-content-flecha-izq')
			
		})
		
	}
	function ocultarBuscador(argument) {
		elementoContentFlechaIzq.addEventListener('click',function () {
			this.classList.add('ocultar-content-flecha-izq')
			inputBuscador.classList.add('buscador-oculto')
			inputBuscador.classList.remove('vista-bsucador-width90')
			btnBuscador.classList.add('boton-buscador-vista-inicio')
			elementoEnlaceInicio.classList.remove('ocultar-enlace')
			$contentEnlaceInicio.classList.remove('content-link-vista-inicio-width')

		})
	}




let btnVistaResultado = document.getElementById('boton-buscador-vista-resultado')
const inputBuscador = document.getElementById('buscador-vista-resultado')
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const form = document.getElementById('form-resultado')
const enlaceInicio = document.getElementById('titulo-resultado')
const contentFlecha = document.getElementById('content-iconos-flecha')
const $nav = document.getElementById('nav')
form.addEventListener('submit',function (e) {
	e.preventDefault()
})
function aparecerBuscador() {
	btnVistaResultado.addEventListener('click', function () {
		inputBuscador.classList.remove('buscador-oculto')
		inputBuscador.style.setProperty('width','90%')
		enlaceInicio.classList.add('ocultar-enlace')
		this.classList.remove('boton-buscar-resposive-resultado')
		contentFlecha.classList.remove('ocultar-content-flecha-izq')
		$nav.classList.add('nav-width12')
	})
}
function ocultarBuscador() {
	contentFlecha.addEventListener('click', function () {
		inputBuscador.classList.add('buscador-oculto')
		btnVistaResultado.classList.add('boton-buscar-resposive-resultado')
		this.classList.add('ocultar-content-flecha-izq')
		enlaceInicio.classList.remove('ocultar-enlace')
		$nav.classList.remove('nav-width12')
	})
}

if (isMobile) {
	// ocultarBuscador()
	// aparecerBuscador() 
}

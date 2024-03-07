function obtenerString() {
	let elementoEnlace = Array.prototype.slice.call(document.querySelectorAll('.nav-temporada')) 
	return elementoEnlace.map(function (elemento) {
		return elemento.textContent
	})
}
function reemplazarCaracter() {
	return obtenerString().map(function (elemento) {
		return elemento.replace(/-/g, " ")
	})
}
function insertarEnElementoHtml() {
	let elementoEnlace = document.querySelectorAll('.nav-temporada')
	elementoEnlace.forEach(function (elemento, index) {
		elemento.innerHTML = reemplazarCaracter()[index]
	})
}
insertarEnElementoHtml()

const formAdmi = document.getElementById('form-admin')
const validarFomr = {}
formAdmi.addEventListener('submit', function (e) {
	e.preventDefault()
	validarInputTituloSerie () 
	validarInputTituloVideo ()
	 validarInputTituloImg ()
	 validarInputDescripcion ()
	 validarForm (this)
	 
})
function validarForm (that) {
	if (validarFomrObj()) {
	 	that.submit()
	 	that.reset()
	 } else {
	 	return
	 }
}

function validarInputTituloSerie () {
	let $inputTituloSerie = document.getElementById('tituloSerie').value.trim()
	const regex = /^[a-zA-Z\s]+$/
	if ($inputTituloSerie != '' && regex.test($inputTituloSerie)) {
		validarFomr.TituloSerie = true
	} else {
		validarFomr.TituloSerie = false
	}
	
}
function validarInputTituloVideo () {
	let $inputTituloVideo = document.getElementById('tituloVideo').value.trim()
	const regex =/[a-zA-Z0-9\s]/
	if ($inputTituloVideo != '' && regex.test($inputTituloVideo)) {
		
		validarFomr.TituloVideo = true
	} else {
		validarFomr.TituloVideo = false
	}
}
function validarInputTituloImg () {
	let $inputNombreImg = document.getElementById('nombreImg').value.trim()
	const regex =  /^[a-zA-Z0-9\-.]+$/
	if ($inputNombreImg != '' && regex.test($inputNombreImg)) {
		validarFomr.NombreImg = true
	} else {
		validarFomr.NombreImg = false
	}
}
function validarInputDescripcion () {
	let $inputDescripcion = document.getElementById('descripcion').value.trim()
	const regex = /^[a-zA-Z\s]+$/

	if ($inputDescripcion != '' && regex.test($inputDescripcion)) {
		validarFomr.Descripcion = true
		
	} else {
		validarFomr.Descripcion = false
		
	}
	
}
function validarFomrObj() {
	const valorDePropiedades = Object.values(validarFomr)
	console.log(valorDePropiedades)
	const validarValorPropiedades = valorDePropiedades.every(function (value) {
		return value == true
	})
	return validarValorPropiedades
}

function reemplzarNombreImg () {
	let inputNombreImg = document.getElementById('nombre-img')
	let textoConEspacio = inputNombreImg.value
	let textoConGuiones = textoConEspacio.replace(/\s/g, "-")
	return inputNombreImg.value = textoConGuiones
}



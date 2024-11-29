let $form = document.getElementById('formAgregarCapitulos')
const $formEliminarCapitulo = document.getElementById('formEliminarCapitulos')
const contentForm = document.getElementById('content-form')
const contentFormEliminar = document.getElementById('content-form-eliminar-capitulo')
function obtenerStringCapitulo () {
	const tabla = document.getElementById('table')

	tabla.addEventListener('click', function (e) {
		let nombreClase = e.target.className.split(' ')[1]
		if (nombreClase == 'capitulo') {
			fomrCapitulo (e.target.innerHTML)
			fomrEliminarCapitulo (e.target.innerHTML)
		}
		if (nombreClase == 'temporada') {
			fomrTemporada (e.target.innerHTML)	
			fomrEliminarCapituloTemporada (e.target.innerHTML)
		}
		
	})
}

function fomrCapitulo (string) {
	$form.elements['capitulo'].value = string
	
}
function fomrTemporada (string) {
	$form.elements['temporada'].value = string
	$form.elements['temporada'].disabled = false
}

function fomrEliminarCapitulo (string) {
	$formEliminarCapitulo.elements['capitulo'].value = string
	
}
function fomrEliminarCapituloTemporada (string) {
	$formEliminarCapitulo.elements['temporada'].value = string
	$formEliminarCapitulo.elements['temporada'].disabled = false
}
obtenerStringCapitulo ()


function abrirForm () {
	const btnFormAgregarCapitulo = document.getElementById('agregar-capitulo')
	btnFormAgregarCapitulo.addEventListener('click',function () {
		contentForm.classList.add('content-form')
	})
}
function cerrarForm () {
	let iconoCerrar = document.getElementById('icon-cerrar')
	iconoCerrar.addEventListener('click',function () {
		contentForm.classList.remove('content-form')
	})
}

function abrirFormEliminar () {
	const btnFormEliminarCapitulo = document.getElementById('eliminar-capitulo')
	
	btnFormEliminarCapitulo.addEventListener('click',function () {
		contentFormEliminar.classList.add('content-form')
	})
}
function cerrarFormEliminar () {
	let iconoCerrar = document.getElementById('icon-cerrar-form-eliminar')
	iconoCerrar.addEventListener('click',function () {
		contentFormEliminar.classList.remove('content-form')
	})
}
abrirForm ()
cerrarForm ()
abrirFormEliminar ()
cerrarFormEliminar ()
const formulario = document.getElementById('form-resultado')

formulario.addEventListener('submit', function (e) {
 	e.preventDefault()
 	const inputText = document.getElementById('buscador')
 	let valido = true
 	if (inputText.value.trim() === '') {
 		console.log(' error')
 		valido = false
 	}

 	if (valido) {
 		this.submit()
 	}
})

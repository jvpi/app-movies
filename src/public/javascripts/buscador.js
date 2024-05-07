let elementoBuscador = document.getElementById('buscador')


elementoBuscador.addEventListener('focus', function (argument) {
	this.style.borderColor = 'blue'
})
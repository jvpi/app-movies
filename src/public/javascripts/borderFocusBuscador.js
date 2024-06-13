let form = document.getElementsByTagName('form')
let elementoBuscador = form[0].querySelector('input')

elementoBuscador.addEventListener('focus', function (argument) {
	this.classList.add('border-color-buscador')
})

elementoBuscador.addEventListener('blur', function (argument) {
	this.classList.remove('border-color-buscador')
})

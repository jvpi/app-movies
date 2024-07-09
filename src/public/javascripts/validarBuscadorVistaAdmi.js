const formAdmi = document.getElementById('form-admin')

formAdmi.addEventListener('submit', function (e) {

	//e.preventDefault()
	reemplzarNombreImg ()
})


function reemplzarNombreImg () {
	let inputNombreImg = document.getElementById('nombre-img')
	let textoConEspacio = inputNombreImg.value
	let textoConGuiones = textoConEspacio.replace(/\s/g, "-")
	return inputNombreImg.value = textoConGuiones
}
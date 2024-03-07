const contentVideo = document.getElementById('content-video')
const spanNombreCapitulos = document.querySelectorAll('.span-capitulos')
const urlActual = location.href
const btnTemporada = document.querySelectorAll('.nav-temporada')
let temporada = null
spanNombreCapitulos.forEach(function(elemento) {
	elemento.addEventListener('click',crearVideoTemplate)
})
function crearVideoTemplate() {
	let nombreCapitulos = this.textContent.trim()
	if (temporada != null) {
		contentVideo.innerHTML = ` 
			<video src="../../../series/${extraerNombreSerie(convertirUrlEnArray)}/
				${temporada}
				/${nombreCapitulos}.mp4" 
				controls id="series-capitulos">
			</video> 
		`
	}
	return
	
}

function convertirUrlEnArray() {
	let urlSinPrimeraBarra = urlActual.replace(/\//, " ")
	let urlSinBarras = urlSinPrimeraBarra.replace(/\//g, " ")
	let urlconvertirEnArray = urlSinBarras.split(' ')
	return urlconvertirEnArray
}


function extraerTemporadaSerie() {
	btnTemporada.forEach(function (elemento) {
		elemento.addEventListener('click',function () {
			temporada = this.textContent.trim().replace(/ /g, "")
			console.log(temporada)
		})
	})
}
function extraerNombreSerie(urlArray) {
	let temporadaSerie = urlArray()[4].replace(/-/g, " ")
	return temporadaSerie.replace(/ /g, "")
}

extraerTemporadaSerie()
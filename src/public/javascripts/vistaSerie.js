let currentPath = location.pathname;
const pathArray = currentPath.split('/')
const serieActual = pathArray[2]


if (localStorage.getItem('serieActual') == null) {
	localStorage.setItem('serieActual', serieActual)
}
if (localStorage.getItem('serieActual') !== null) {
	const serie = localStorage.getItem('serieActual') 
	const serieArray = serie.split(',') 
	if (serieArray[0] != serieActual && serieArray.length < 2) {
		serieArray.push(serieActual)
		localStorage.setItem('serieActual', serieArray)
	}
	
}
const getItemSerie = localStorage.getItem('serieActual').split(',')
if (getItemSerie.length > 1) {
	let indice = 0
	const temporada = 'temporada 1'
	localStorage.setItem('indice',indice)
	localStorage.setItem('temporada',temporada)
	localStorage.removeItem("serieActual");
}

const playCapitulo = {
	seleccionarCapitulo : function () {
		let contentCapitulos = document.getElementById('content-capitulos')
		let capitulos = Array.from(document.querySelectorAll('.cantidad-capitulos')) 
		let obtenerIndice = localStorage.getItem('indice')

		if (obtenerIndice !== null) {
			capitulos[obtenerIndice].innerHTML = ''
			capitulos[obtenerIndice].classList.add('icon-play3')
			capitulos[obtenerIndice].classList.add('play')
		} else {
			contentCapitulos.firstElementChild.classList.add('icon-play3')
			contentCapitulos.firstElementChild.classList.add('play')
			contentCapitulos.firstElementChild.innerHTML = ''
			
		}
			
		contentCapitulos.addEventListener('click', function (e) {
			let indiceCapitulosArray = capitulos.indexOf(e.target)
			localStorage.setItem('indice', indiceCapitulosArray)
			
			let obtenerHijos = contentCapitulos.children
			if (e.target.className == 'cantidad-temporada') {
				for (var i = 0; i < obtenerHijos.length; i++) {
					obtenerHijos[i].classList.remove('icon-play3')
					obtenerHijos[i].classList.remove('play')
					obtenerHijos[i].innerHTML = i +1
				}		
				e.target.innerHTML = ''
				e.target.classList.add('icon-play3')
				e.target.classList.add('play')
			}
			
		})
		
	}
}



function categoriasRemoveSlash () {
	let contentCategoria = document.getElementById('categorias')
	let removerCaracter  =contentCategoria.lastElementChild.innerHTML.replace('/', '')
	let ultimoElemento = contentCategoria.lastElementChild
	ultimoElemento.innerHTML = removerCaracter
	
}


/*aqui se desplega la opciones del select box*/

function toggleContentTemporada () {
	const contentSelectBox = document.getElementById('content-select-box') 
	const contentTemporada = document.getElementById('content-temporada-hidden')
	contentSelectBox.addEventListener('click',function () {
		 contentTemporada.classList.toggle('ocultar-content-temporada')
	})
}


function seleccionarTemporada() {
	const contentTemporada = document.getElementById('content-temporada-hidden')
	const temporadaSeleccionada = document.getElementById('temporadaSeleccionda') 
	
	if (localStorage.getItem('temporada') != null) {
		temporadaSeleccionada.innerHTML = localStorage.getItem('temporada')
	}
	
	contentTemporada.addEventListener('click',function (e) {
		if (e.target.className == 'temporada') {
			const temporada = e.target.innerHTML.replace('da','da ')
			localStorage.setItem('temporada',temporada)
			temporadaSeleccionada.innerHTML = localStorage.getItem('temporada')
		    
		}
	})
	
}
function agregarEspacioKeyTemporada() {
	const temporadaActual = document.getElementById('temporada-actual')
	temporadaActual.innerHTML = temporadaActual.innerHTML.replace('da','da ')
}
playCapitulo.seleccionarCapitulo()
categoriasRemoveSlash ()
toggleContentTemporada ()
seleccionarTemporada()
agregarEspacioKeyTemporada()



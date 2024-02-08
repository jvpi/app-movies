 function  obtenerDirectorios() {
	let ulElemento = document.getElementById('menu-laterarl-lista')
	ulElemento.addEventListener('click',function(e) {
		let target  = e.target.tagName
		if (target == 'A') {
			let nombreDirectorio = e.target.textContent
			let nombreSubDirectorio = localStorage.setItem('directorio',nombreDirectorio )
			console.log(textContent)
		}
		
	})
}

obtenerDirectorios()
const elementoUl = document.querySelector('ul')
const lista = Array.from(document.querySelectorAll('.lista')) 
const h1 = Array.from(document.querySelectorAll('.h1')) 
function toggle() {
	h1.forEach( function(elementh1, index) {
		h1[index].addEventListener('click', function () {
			lista.forEach( function(element, index) {
				element.classList.remove('activo')
			});
			lista[index].classList.add('activo')
		})

	});

}

toggle()

const elementoUl = document.querySelector('ul')
const lista = Array.from(document.querySelectorAll('.lista')) 
const h1 = Array.from(document.querySelectorAll('.h1')) 
let btnCircleRigtn = Array.from(document.querySelectorAll('.circle-right')) 
const $capitulos =  Array.from(document.querySelectorAll('.capitulo')) 
// function toggle() {
// 	h1.forEach( function(elementh1, index) {
// 		h1[index].addEventListener('click', function () {
// 			lista.forEach( function(element, index) {
// 				element.classList.remove('activo')
// 			});
// 			lista[index].classList.add('activo')
// 		})

// 	});

// }


for(var i = 0; i < btnCircleRigtn.length; i++){
	btnCircleRigtn[i].addEventListener('click', function (e) {
		let indiceElementoP = btnCircleRigtn.indexOf(e.target )
		this.classList.toggle('circle-right-rotate')
		toggle (indiceElementoP)
		
	})
}

function toggle (indiceElementoP) {
	for(var j = 0; j < lista[indiceElementoP].children.length; j++){
		let hijosLista = lista[indiceElementoP].children[j]
		if (hijosLista.tagName == 'P') {
			hijosLista.classList.toggle('acordeon')
		}
	}
}
//toggle()



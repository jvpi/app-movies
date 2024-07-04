export default function (formulario,inputText) {
	formulario.addEventListener('submit', function (e) {
	 	e.preventDefault()
	 	let inputTextValue = inputText.value.trim()
		let nuevaCadena = ''
	 	for (let caracter of inputTextValue) {
			if (/^[A-Za-záéíóúñ0-9\s]+$/.test(caracter)) {
				nuevaCadena += caracter
			}
		}
		if (inputTextValue !='') {
			this.submit()
			this.reset()
		}
	})

}



//let valido = false
 	// if (/^[A-Za-záéíóúñ\s]+$/.test(nuevaCadena)) {
 	// 	valido = true
 	// 	console.log(nuevaCadena)
 	// }
 	// // if (!regexText.test(inputText.value.trim())) {
 	// // 	valido = false
 		
 	// // }

 	// // if (valido) {
 	// // 	this.submit()
 	// // 	this.reset()

 	// // }

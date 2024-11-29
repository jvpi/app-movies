const btn = document.getElementById('btn')
const form = document.getElementById('form')
const url = 'http://localhost:3000/users/registro'
const inputCorreo = document.getElementById('correo')
inputCorreo.addEventListener('blur', async function (argument) {
	var data = { correo: form.correo.value };
	const respuesta = await fetch (url,{
		method: "POST",
		headers: {
		   'Content-Type': 'application/json',
		   'api':'fetch'
		 },
		 body: JSON.stringify(data)
	})

	const result = await respuesta.json();
	mensFetch (result)
})

 function mensFetch (result) {
 	const fragmet = document.createDocumentFragment()
 	const contentForm = document.getElementById('content-form')
 	const theFirstChild  = contentForm.firstElementChild
 	const msnElement = document.createElement('div')
 	msnElement.setAttribute('class', "content-msg")
 	msnElement.setAttribute('id', "content-msg")
 	msnElement.innerHTML  = `
    	<h2 class='h2-msn-error'>${result.user} 
    	  <span class="cerrar-mesanje" id="cerrar-mesanje">x</span>	
    	</h2>
    `
    fragmet.appendChild(msnElement)

    contentForm.insertBefore(fragmet,theFirstChild)
	cerrarMsjFetch ()
}
// if (contraseña != confirmar_contraseña) {
// 		errores.push({text:'las contraseña no coinciden'})
		
// 	}<h2>${product.name}</h2>

/*eliminar mensaje de error*/

const contentMsnError = document.getElementsByClassName('content-msg')[0]


if (contentMsnError != undefined) {
	setTimeout(function () {
		contentMsnError.remove()
	}, 2000)
	
}

function cerrarMsjFetch () {
	const cross = document.getElementById('cerrar-mesanje')
	const contentMsj = document.getElementById('content-msg')
	if (cross) {
		cross.addEventListener('click', function (argument) {
			contentMsj.remove()
		})
	}
	
}


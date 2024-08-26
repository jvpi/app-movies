function toggleForm () {
	const $h1 = document.getElementById('h1')
	const $form = document.getElementById('form-admin')
	$h1.addEventListener('click', function () {
		$form.classList.toggle('aparacer-form')
	})
}

toggleForm () 
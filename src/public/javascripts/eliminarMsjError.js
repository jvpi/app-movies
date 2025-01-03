const contentMsnError = document.getElementsByClassName('content-msg')[0]

if (contentMsnError != undefined) {
	setTimeout(function () {
		contentMsnError.remove()
	}, 2000)
	
}
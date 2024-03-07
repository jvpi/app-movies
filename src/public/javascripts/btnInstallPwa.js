let deferredPrompt = null
let btnInstall = document.getElementById('install_button')
btnInstall.addEventListener('click',installPwa)
addEventListener('beforeinstallprompt',function (e) {
	deferredPrompt = e
	btnInstall.hidden = false;
  
})

function installPwa() {
	deferredPrompt.prompt();
	btnInstall.disabled = true
	deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted");
      btnInstall.hidden = true;
    } else {
      console.log("PWA setup rejected");

    }
    btnInstall.disabled = false;
    deferredPrompt = null;
  });
}
window.addEventListener("appinstalled", evt => {
  console.log("appinstalled fired", evt);
});

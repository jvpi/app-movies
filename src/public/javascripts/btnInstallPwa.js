let deferredPrompt = null
let btnInstall = document.getElementById('install_button')
let classBtnI = document.getElementsByClassName('btn-install')
let prompt;


btnInstall.addEventListener('click',installPwa)
addEventListener('beforeinstallprompt',function (e) {
	deferredPrompt = e
	btnInstall.hidden = false;
  btnInstall.classList.add('btn-install')
  prompt = true
 
})



function installPwa() {
 
	deferredPrompt.prompt();
	btnInstall.disabled = true
	deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("PWA setup accepted");
      btnInstall.hidden = true;
      btnInstall.classList.remove('btn-install')
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



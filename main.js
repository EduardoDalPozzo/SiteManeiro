function teste() {
   document.querySelector('#som_tecla_pom').play();
}

function CLICKCLAP() {
   document.querySelector('#som_tecla_clap').play();
}

function CLICKTIM() {
   document.querySelector('#som_tecla_tim').play();
}

function CLICKPUFF() {
   document.querySelector('#som_tecla_puff').play();
}

function CLICKSPLASH() {
   document.querySelector('#som_tecla_splash').play();
}

function CLICKTOIM() {
   document.querySelector('#som_tecla_toim').play();
}

function CLICKPSH() {
   document.querySelector('#som_tecla_psh').play();
}

function CLICKTIC() {
   document.querySelector('#som_tecla_tic').play();
}

function CLICKTOM() {
   document.querySelector('#som_tecla_tom').play();
}



document.querySelector('.tecla_pom').onclick = teste
document.querySelector('.tecla_clap').onclick = CLICKCLAP
document.querySelector('.tecla_tim').onclick = CLICKTIM
document.querySelector('.tecla_puff').onclick = CLICKPUFF
document.querySelector('.tecla_splash').onclick = CLICKSPLASH
document.querySelector('.tecla_toim').onclick = CLICKTOIM
document.querySelector('.tecla_psh').onclick = CLICKPSH
document.querySelector('.tecla_tic').onclick = CLICKTIC
document.querySelector('.tecla_tom').onclick = CLICKTOM
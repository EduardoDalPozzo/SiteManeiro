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
   document.querySelector('#som_tecla_oie').play();
   setTimeout(function() { document.querySelector('#som_tecla_zoio5').play();}, 4600);
}

function CLICKZOIO() {
   document.querySelector('#som_tecla_zoio').play();
}


function CLICKZOIOA() {
   document.querySelector('#som_tecla_zoio2').play();
}

function CLICKQUATRO() {
   document.querySelector('#som_tecla_quatro').play();
   setTimeout(function() { document.querySelector('#som_tecla_haha').play();}, 1000);
  
}

function CLICKZOIOB() {
   document.querySelector('#som_tecla_zoio3').play();
}

function CLICKZOIOC() {
   document.querySelector('#som_tecla_zoio4').play();
}

function CLICKZOIOD() {
   document.querySelector('#som_tecla_zoio6').play();
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
document.querySelector('.tecla_zoio').onclick = CLICKZOIO
document.querySelector('.tecla_zoio2').onclick = CLICKZOIOA
document.querySelector('.tecla_quatro').onclick = CLICKQUATRO
document.querySelector('.tecla_zoio3').onclick = CLICKZOIOB
document.querySelector('.tecla_zoio6').onclick = CLICKZOIOC
document.querySelector('.tecla_zoio4').onclick = CLICKZOIOD
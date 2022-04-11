const cartas = ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];

let cartasErradas = document.querySelectorAll(".cartaErrada");
let numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
let baralhoCortado = cartas.slice(0 , numeroCartas);
let cartasEmbaralhadas = baralhoCortado.sort(comparador);
let primeiraCarta = null;
let segundaCarta = null;
let cartaVirada = null;
let numeroJogadas = 0;

let contCliques = 0
let contadorSegundos = 0
let contadorMinutos = 0 

let interval = this.setInterval(function() {
  if (contadorSegundos === 60) {
    contadorMinutos++
    contadorSegundos = 0
  }
  let minutos = document.querySelector('.relogio-minutos')
  let segundos = document.querySelector('.relogio-segundos')

  minutos.innerHTML = `⌚ ${contadorMinutos}m `
  segundos.innerHTML = `${contadorSegundos}s`

  contadorSegundos++
},1000)

function configurarJogo (){
    while (numeroCartas %2 !== 0 || numeroCartas < 4 || numeroCartas > 14){
        numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
    }
    return(numeroCartas);
}

function cortarBaralho(numeroCartas){
    return(baralhoCortado);
}

function comparador() { 
    return Math.random() - 0.5; 
}

function embaralharCartas(){
    return (cartasEmbaralhadas);
}

function montarTabuleiro(cartasEmbaralhadas){
    for (i = 0; i < cartasEmbaralhadas.length; i++){  
        document.querySelector(".corpo-cartas").innerHTML+=`<div class='carta cartaErrada' onclick='virarCarta(this)'><img class='traseira-carta'src='imagens/front.png'/><img class='frente-carta escondido' src='imagens/${cartasEmbaralhadas[i]}.gif' /></div>`        
    }
}    

function virarCarta(cartaVirada){
    if (cartaVirada.classList.contains("cartaErrada") === false){
        return
    }
    numeroJogadas ++; 
    cartaVirada.querySelector(".carta .traseira-carta").classList.add("escondido");
    cartaVirada.querySelector(".carta .frente-carta").classList.remove("escondido");
    if (primeiraCarta === null){
        primeiraCarta = cartaVirada;
    } else {
        segundaCarta = cartaVirada
    }
    igualdadeCartas();    
}

function igualdadeCartas(){
    if (primeiraCarta.innerHTML === segundaCarta.innerHTML){
        numeroCartas = numeroCartas - 2;
        primeiraCarta.classList.remove("cartaErrada");
        segundaCarta.classList.remove("cartaErrada");
        primeiraCarta = null;
        segundaCarta = null;
        conferirFinalJogo();
    } else {
        setTimeout (desvirarCarta, 1000);
    }
}

function desvirarCarta(){
    primeiraCarta.querySelector(".carta .frente-carta").classList.add("escondido");
    segundaCarta.querySelector(".carta .frente-carta").classList.add("escondido");
    primeiraCarta.querySelector(".carta .traseira-carta").classList.remove("escondido");
    segundaCarta.querySelector(".carta .traseira-carta").classList.remove("escondido");
    primeiraCarta = null;
    segundaCarta = null;
}

function conferirFinalJogo (){
    if (numeroCartas === 0){
        alert (`Você ganhou em ${numeroJogadas} jogadas!!!! Tempo de jogo: ${contadorMinutos}m ${contadorSegundos}s`);
        clearInterval(interval);

    }
}

configurarJogo();
cortarBaralho(numeroCartas);
comparador();
embaralharCartas(baralhoCortado);
montarTabuleiro(cartasEmbaralhadas);
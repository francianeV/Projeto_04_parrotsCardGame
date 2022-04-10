const cartas = ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];
let cartasErradas = document.querySelectorAll(".cartaNaoOK");
let numeroCartas = Number(prompt("Escolha o número de cartas que deseja iniciar o jogo. Obs: Apenas valores pares, entre 4 e 14."));
let baralhoCortado = cartas.slice(0 , numeroCartas);
let cartasEmbaralhadas = baralhoCortado.sort(comparador);
let primeiraCarta = null;
let segundaCarta = null;
let cartaVirada = null;
let numeroJogadas = 0;

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
        document.querySelector(".tabuleiro").innerHTML+=`<div class='carta cartaNaoOk' onclick='virarCarta(this)'><img class='traseira-carta'src='imagens/front.png'/><img class='frente-carta escondido' src='imagens/${cartasEmbaralhadas[i]}.gif' /></div>`        
    }
}    

function virarCarta(cartaVirada){
    if (cartaVirada.classList.contains("cartaNaoOk") === false){
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
        primeiraCarta.classList.remove("cartaNaoOk");
        segundaCarta.classList.remove("cartaNaoOk");
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
        alert (`Você ganhou em ${numeroJogadas} jogadas!!!!`);
    }
}

configurarJogo();
cortarBaralho(numeroCartas);
comparador();
embaralharCartas(baralhoCortado);
montarTabuleiro(cartasEmbaralhadas);
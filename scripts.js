do{
    var selection = parseInt(window.prompt("Entre um número de 4 a 14! São aceitos apenas números pares", ""), 10);

}while(isNaN(selection) || selection > 14 || selection < 4 || selection%2 !== 0);



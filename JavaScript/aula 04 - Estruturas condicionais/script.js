var jogador1 = 0;
var jogador2 = 1;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("jogadores inválidos");

if(jogador1 > 0 && jogador2 ==0) {
    console.log("jogador1 marcou ponto");
    placar = jogador1 > jogador2;
} else if(jogador2 > 0 && jogador1 ==0) {
    console.log("jogador2 marcou ponto");
    placar = jogador2 > jogador1;
} else{
      console.log("ninguém marcou ponto");
}

//switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador2 ganhou");
        break;
    default:
        console.log("Ninguém ganhou");
}

let lista = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

//for
for(let indice = 0; indice < lista.length; indice++){
    console.log(indice);
}

//for/in
for(let i in lista){
    console.log(i);
}

//for com object
for(i in object){
    console.log(i);
}

//for/of - executa repetição a partir de valor com array
for(i of lista){
    console.log(i);
}

//for com object
for(i of object.propriedade1){
    console.log(i);
}

//while
var a = 0;
while (a < 10) {
a++;
console.log(a);
}

//do/while
do{
    a++;
    console.log(a);
} while(a < 10);
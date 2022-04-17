//TIPOS DE FUNÇÃO

//DECLARATIVA
function funcaoDeclarativa() {
    console.log("Sou uma msg de uma função declarativa")
}
funcaoDeclarativa();

//EXPRESSÃO DE FUNÇÃO
//COM NOMEAÇÃO
var funcao = function funcao2(){
    console.log("Sou uma msg de função de expressão")
}

funcao();

//ARROW FUNCTION
var funcaoArrow = () => {
    console.log("Sou uma arrow function!");
}

funcaoArrow();
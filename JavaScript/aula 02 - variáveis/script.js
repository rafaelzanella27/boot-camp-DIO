// TIPOS PRIMITIVOS

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 27;
console.log(typeof(numeroQualquer));

//string
var nome = "Rafael";
console.log(typeof(nome));

//DECLARAR VARIÁVEIS

//var escopo global e pode ser alterada
var variavel = "Rafael";
variavel = "Guilherme";
console.log(variavel);

//let escopo local e pode ser alterada
let variavelLet = "Rafael";
variavelLet = "Guilherme";
console.log(variavelLet);

// const escopo local de bloco, valor incial obrigatório e não pode ser alterado
const valorConstante = "Rodrigues";
console.log(valorConstante);

//ESCOPO GLOBAL E LOCAL

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}
escopoLocal();

//ATRIBUIÇÃO
var atribuicao = "Rafael";

//COMPARAÇÃO DE VALORES
var comparacao = 0 == 0;
console.log(comparacao);

//COMPARAÇÃO IDÊNTICA (compara valor e o tipo)
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

var maiorOuIgual = 5 >= 2;
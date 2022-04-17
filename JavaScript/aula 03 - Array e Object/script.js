//VETORES E ARRAYS

//COMO DECLARAR UM ARRAY

let array = ["string", 1, true, ["array1"], ["array2"]];
console.log(array);

//imprimi o campo 0 do array.
console.log(array[0]);

//forEach() - itera
array.forEach(function(item, index){console.log(item, index)});

//push adiciona novo item no array
array.push("novo item");

//pop remove um item do final do array
array.pop();

//shift vai tirar um item do início do array
array.shift();

//unshift adiciona um item no início do array
array.unshift("novo item no início");

//indexOf() retorna o índice de um item
console.log(array.indexOf(true));

//splice() remove ou substitui um item pelo índice
// array.splice(0,2);
// console.log(array);

//slice() retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

//Objetos

let object = {string: "Rafael", number: 27, boolean: true, lista: ["lista"], objectInterno: {objectInterno: "objeto interno"}};
console.log(object);
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.lista;
console.log(arrayInterno);
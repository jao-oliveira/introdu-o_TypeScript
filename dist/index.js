"use strict";
//Tipos basicos 
let age = 5; // numeros
let firstName = "JP"; // string
let isValid = true; //boleanos
let idk = 5; // sem tipagem estatica
idk = '12';
idk = true;
const ids = [1, 2, 3, 4];
const booleans = [true, false];
const names = ['sei la ', 'la ele', 'jp'];
// TUPLA
// arrays que contêm múltiplos tipos
// e quando a ordem em que eles estão indexados é importante
const person = [1, 'jp'];
// list de tupla
const pessoas = [
    [1, 'jane'],
    [2, 'jp'],
];
// Itersections 
//Quando eu quero que uma variavel seja de um tipo ou de outro
const productId = false;
//Enum 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction["left"] = "esquerda";
})(Direction || (Direction = {}));
const direction = Direction.left;
// Type assertions
//podemos alterar o tipo quando atribuimos a uma variavel
const productName = 'bone';
let itemId = productName;
console.log(direction);

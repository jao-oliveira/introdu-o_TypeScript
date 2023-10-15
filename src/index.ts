
//Tipos basicos 

let age: number = 5; // numeros
let  firstName:string = "JP"; // string
let isValid: boolean = true; //boleanos
let idk: any = 5; // sem tipagem estatica
idk = '12';
idk = true;

const ids: number[] = [ 1, 2 ,3 , 4]
const booleans: boolean[] = [true, false]
const names: string[] = [ 'sei la ', 'la ele', 'jp']

// TUPLA

// arrays que contêm múltiplos tipos
// e quando a ordem em que eles estão indexados é importante

const person: [number, string] = [1 , 'jp'] 

// list de tupla

const pessoas: [number, string][] = [
    [1 , 'jane'],
    [2, 'jp'],
];

// Itersections 
//Quando eu quero que uma variavel seja de um tipo ou de outro
const productId: string | number | boolean = false


//Enum 

enum Direction {
    up = 1,
    down = 2,
    left = 'esquerda'
}

const  direction = Direction.left;

// Type assertions

//podemos alterar o tipo quando atribuimos a uma variavel
const productName: any =  'bone'
let itemId = <string>productName

console.log(direction)
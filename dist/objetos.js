"use strict";
// objetos de  type
// objetos com Typescript
// um type é um obj
const user = {
    firstName: 'jane',
    age: 20,
    email: 'jane@gmail.com',
    passoword: '',
    orders: [{ productId: "1", price: 200 }],
    register() {
        return "jp";
    }
};
user.passoword;
//propriedades opcionais tem precisam de um ponto de interrogação 
//quando for passada como parametro de função
//ou o ponto de exclamação  "!" para dizer que a propriedade existe
const printLog = (message) => { };
printLog(user.passoword);
const author = {
    email: "Jp@gmail.com",
    firstName: 'jp',
    age: 2,
    books: ['2'],
    orders: [],
    register() {
        return "jp";
    }
};
const emailUser = {
    email: "jp2gemail.com",
    firstName: "jp",
};
const newAuthor = {
    email: 'author@gmail.com',
    firstName: 'jp',
    books: [],
};

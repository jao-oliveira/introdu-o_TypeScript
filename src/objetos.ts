// objetos de  type
// objetos com Typescript
// um type é um obj

type Order = {
    productId: string,
    price: number,
}

type User = {
    firstName: string,
    age: number,
    email: string,
    passoword?: string, // a "?" significa que password é opcional
    orders: Order[]
    register():string;
};

const user: User = {
    firstName: 'jane',
    age: 20,
    email: 'jane@gmail.com',
    passoword:'',
    orders: [{productId: "1", price: 200}],
    register(){
        return "jp";
    }
}

user.passoword


//propriedades opcionais tem precisam de um ponto de interrogação 
//quando for passada como parametro de função
//ou o ponto de exclamação  "!" para dizer que a propriedade existe
const printLog =  (message: string) =>{}

printLog(user.passoword!)


//UNIONS

//unir 2 Types

type Author ={
    books:string[]
}

const author: Author & User = {
    email: "Jp@gmail.com",
    firstName: 'jp',
    age: 2,
    books:['2'],
    orders:[],
    register(){
        return "jp";
    }

}

//Interfaces

interface UserInterface{
    //readonly "apenas leitura" não pode ser alterado
   readonly firstName: string,
    email:string,
}

const emailUser:UserInterface ={
    email: "jp2gemail.com",
    firstName: "jp",
};



interface AuthorInterface {
    books:[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: 'author@gmail.com',
    firstName: 'jp',
    books:[],
};









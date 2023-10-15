const returnValue = <t>(value: t) => value

const message =returnValue <string>('hello World')
const cout = returnValue <number>(5)

console.log(cout)


function getFirstValueFromArray<Type>(array: Type[]){
    return array[0];
}

const getFirstValuestriong = getFirstValueFromArray<string>(["1", "2"]);
const getFirstValueNumber = getFirstValueFromArray<number>([1, 2]);

///promise

const returnPromise = async (): Promise<string> => {
     return "JP"
}


//classe

class GenericNumber<t> {
    zero: t;
    sum: (x:t, y: t)=> t;


    constructor(zero: t ,sum: (x:t, y: t)=>t){
        this.zero = zero
        this.sum = sum
    }
    
    
}
  
const myGenericNumber = new GenericNumber<number>(0, (x: number, y:number)=>{
   return x + y
})
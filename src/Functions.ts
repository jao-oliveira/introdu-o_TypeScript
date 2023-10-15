// Manipulando tipos de parametros em funções
/// tipos de retornos 

const sum = (x: number, y:number): string | number =>{
    return (x + y).toString();
};

const value = sum(5, 5 );


//VOID é uma função que não retorna nenhum valor
const log = (message: string): void =>{
    console.log(message)
}



//ITERFACE COM FUNÇÂO

interface MathFunc {
    (x: number, y:number): number;
}


const summ= (x: number, y:number): number| number =>{
    return (x + y)
};

const valor = summ(5, 5 );

const sub: MathFunc = (x: number, y:number) =>{
    return x - y
}
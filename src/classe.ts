interface IPerson {
    id: number;
   
    sayMyName():string;
}


class Person implements IPerson{
    readonly id: number;
    protected name: string;
    private age: number;
    



    constructor(id: number, name: string, age: number){
    this.id = id;
    this.name = name;
    this.age = age;
    }

    sayMyName(): string{
        return this.name
    }



}

//mesma coisa q encima mais simplificado

class PersonRefeito{
    constructor( readonly id: number,
        protected name: string,
        private age: number,
    ) {}
}

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }
    whowAmI(){
        return this.name
        // return this age // age não pode ser retornado pq esta privado
    }

}

const jp = new Person(1, 'jp', 23)




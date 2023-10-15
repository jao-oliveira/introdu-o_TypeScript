"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
//mesma coisa q encima mais simplificado
class PersonRefeito {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    whowAmI() {
        return this.name;
        // return this age // age não pode ser retornado pq esta privado
    }
}
const jp = new Person(1, 'jp', 23);

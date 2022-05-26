// PROGRAMAÇÃO ORIENTADA A OBJETOS

class Person { //class é a criação de objetos
    constructor(firstname, lastname, age) { //controctor é uma função para imprimir objetos
        this.firstname = firstname; // assinala os dados ao objeto person
        this.lastname = lastname;
        this.age = age;
    }

    getfullname() { // forma de criar metodos 
        console.log(`${this.firstname} ${this.lastname}`); //precisa usar o this para se referir aos valores da class
    }

    speake() { // metodo que não precisa de uma const/de dados para funcionar (metodo estatico)
        console.log("Hello World!");
    }
}


const person = new Person("Felipe", "Barbiere", 35); 

person.getfullname(); //forma de pegar o metodo

person.speake();



const person1 = new Person("Luis", "Felipe", 18); // new instanseia a person 

const person2 = new Person("Jane", "Doe", 40);

console.log(person1, person2);


// ERANÇAS

class Animal {
    constructor(name) {
        this.name = name;
    }

    speake() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal { // extends faz a class criada se uma extenção de outra class
    constructor(name) { // como a cless extende de Animal, o controctor precisa receber os mesmos paramentros 
        super(name) // super chama o controctor da class Animal 
    }

    speake() { //esse speake vai sobreescrever o speake anterior
        console.log(`${this.name} barked`);
    }
}

const animal = new Animal("Simba");

animal.speake();

const dog = new Dog("Rex");

dog.speake();
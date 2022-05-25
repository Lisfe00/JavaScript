// LOOPS/REPETIÇÃO

// FOR

for (let i = 0; i < 10; i++){
    console.log(i);
};

const cars = ["ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++){ //length define o tamanho da lista 
    console.log(cars[i]);
};

for (let car of cars) { //a mesma coisa que o de cima
    console.log(car);
};

cars.forEach(function(car, i){ //fax a função ser executada em todos os cars da lista
    console.log(i); //no forEach pode-se adicionar contador
    console.log(car); 
});

// WHILE

let i = 0;

while (i < 10) {
    console.log("i é menor que 10");
    // i = i + 1;
    i++ //é a mesma coisa que o de cima
};

// FORIN

const person = {
    nome: 'jane',
    age: '21',
};

for (property in person) { //ele pega a propriedade (no caso o nome) printa e repete pegando a segunda propriedade (no caso a age)
    console.log(person[property]);
};


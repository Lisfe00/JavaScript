//OBJETOS

const person = {
    PrimeiroNome: 'Luis',
    UltimosNome: 'felipe',
    idade: "18",
    materias: ['matematica', 'portugues', 'hitoria'],
    gato: { // da para colocar uma propriedade dentro de outra
        nome: "gato",
        idade: 4,
    },
};

//const PrimeiroNome = person.PrimeiroNome;
//const UltimosNome = person.UltimosNome;
//const idade = person.idade;
//const materias = person.materias;

const {PrimeiroNome, UltimosNome, idade, materias} = person //é a mesma coisa que o comentario de cima e podem ser renomeados EX: Primeironome: firstname

console.log(PrimeiroNome);
console.log(UltimosNome);
console.log(idade);
console.log(materias);

person.dog = "simba"; //adiciona uma nova propriedade ao person

console.log(person);

// LISTA COM OBJETOS

const todos = [
    {
        id: 1,
        description: "estudar",
        iscomplite: false
    },
    {
        id: 2,
        description: "ler",
        iscomplite: true
    },
    {
        id: 3,
        description: "treinar",
        iscomplite: true
    }
]

console.log(todos[2].description); //acesso a lista pela posição e dps acesso a variavel da propriedade pelo nome

//STRNGIS

let msg = "hello world"; // let cria uma variavel que pode receber valores e ser alterada
const mensagem = "olá mundo"; //const cria uma variavel inalteravel (apenas com metodos, mas n pode resignificar a variavel)

const firtsname = "Luis";
const lastname = "Felipe";

console.log('Meu nome é ' + firtsname + ' ' + lastname); //variaveis podem ser juntadas, mas essa não é a melhor forma

console.log(`Meu nome é ${firtsname} ${lastname}`); //variaveis juntas de maneira mais eficiente usando a crase no lugar das aspas, então $ e {}

console.log(`Meu nome é ${firtsname.toLowerCase()} ${lastname.toUpperCase()}`); //toLowerCase deixa tudo em minusculo e toUpperCase deixa tudo em maiusculo

const names = 'Luis, João, Maria';

console.log(names.split(",")); //split cria lista com as avariaveis, dividindo pelo caracter citado


//NUMEROS

const number = 5;

console.log(number + 10); //os numeros funcionam da mesma forma, podendo fazer as operações matematicas 

console.log(number.toString); //tranforma o type number em string

console.log(typeof number); //mostra o tipo de variavel 


//BOOLEANS

false 
true

console.log(2 == 3); //basicamente vai indicar se é verdadeiro ou falso 


//NULL E UNDEFINED

const x = null; //a variavel é declarada como vazia

const y = undefined; //a variavel fica indefinida (ou seja, nem vazia ela é)


//LIST

const nomes = ["Luis", "Joao", "Maria", 10, false]; //os valores na lista podem ser de qualquer tipo

const Joao = nomes[1];//pega a variavel coforme a posição (lembrando que começa em 0)

console.log(Joao);

nomes.push("Pedro"); //adiciona uma nova variavel ao final da lista
nomes.unshift(20); //adiciona uma nova variavel ao inicio da lista

console.log(nomes);  

nomes.pop(); //remove o ultimo item de lista

console.log(nomes);

nomes[3] = "Julia"; //altera a variavel conforme a posição 

console.log(nomes);

console.log(names.indexOf("Luis")); //mostra a posição da variave

console.log(nomes.sort()); //coloca as variaveis em ordem alfabetica

console.log(nomes.length); //mostra quantos intens tem na lista ou se ela é vazia usa o length > 0 no if

console.log(Array.isArray(nomes)); //fala se a veriavel é uma lista



const numbers = [1 ,2, 3, 4, 5];

console.log(numbers.map(function(number){ //map faz a função ser executada em cada numero e faz uma nova lista (nesse caso vai multiplicar todos os numeros por 2)
    return number * 2
}));


const ages = [8, 13, 27, 30, 22, 40];

console.log(ages.filter(function(age){ //filter faz um filtro mostrando apenas as variaveis que são verdadeiras na função (nesse caso vai mostar apenas os numeros pares)

    return age % 2 === 0
}));

console.log(ages.reduce(function(age, acumulator){ //reduce permite fazer a junção das variaveis da lista (nesse caso faz a soma dos numeros)
    return acumulator + age; //soma o acumulator com a age, substitui o valor do acumulator e repete com o segundo valor da age

}, 0)); // 0 é o valor inicial do acumulator 


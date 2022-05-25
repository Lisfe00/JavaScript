// FUNÇÕES

function sun(a, b = 10) { //com b igual a 10 se ele n receber um valor ele assume o valor de 10
    console.log(a + b);
    return a + b; // o return precisa ser assinalado a uma variavel
};

sun(2, 2); // os valores da função podes ser declarados depois

const ValueSun = sun(2, 2); // a variavel q assinala o return 

// ARROW FUNCTION

// const sunArrow = (a, b) => { //pode colocar a função direto na declaração da variavel
//     return a + b;
// };

const sunArrow = (a, b) => a + b; // é a mesma coisa de usar um return como em cima


const ValueSum = sunArrow(2, 2);
console.log(ValueSum);
//  SELECT ELEMENTOS HTML

//const addusertext = document.getElementById('add-user') // pega um elemento do html conforme id dado a ele / retorna uma referencia ao elemento
const addusertext = document.querySelector('#add-user'); // se usar o querySelector precisa botar a # ou o . / retorna o elemento em si


//addusertext.innerText = "Adicionar usuario"; // faz alteração no id seleciondado com getEllement
addusertext.textContent = "Adicionar Usuario"; // az alteração no id seleciondado com querySelector


console.log(addusertext);

const Item = document.querySelector(".item"); // retorna apenas o primeiro elemento com essa class

console.log(Item);

const MyForm = document.querySelector(".container #my-form"); // pega o id dentro da class

console.log(MyForm);

// SELECIONAR MULTIPLOS ELEMENTOS

const allitems = document.querySelectorAll('.item'); // vai selecionar toodos os itens (mais usado)

console.log(allitems);

// const allelements = document.getElementsByClassName('item') // ouutra forma de pegar todos os itens (não tão usado)

// console.log(allelements);

const allelements = document.getElementsByTagName('li') // seleciona os item pela tag html (não tão usado)

console.log(allelements);


const titulo = document.querySelector('.titulo');

console.log(titulo);

titulo.textContent = "JavaScript  para Experts";

const itens = document.querySelector('.items');

console.log(itens.children[0].textContent = "Item dois");

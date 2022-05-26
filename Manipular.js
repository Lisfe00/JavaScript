//  MANIPULAR ELEMENTOS HTML

const itens = document.querySelector('.items');

//itens.remove(); // remove os itens selecionados

//itens.firstElementChild.remove(); // o firstElementChild seleciona o primeiro filho da tag html (no cado o ul ele vai pegar o primeiro li)

//itens.lastElementChild.remove(); // o lastElementChild seleciona  utimo filho da tag html

// console.log(itens.children[1].textContent = "Item dois"); // pega os elementos da lista (os filhos) e pode usar indice para selecionar 

// itens.lastElementChild.innerHTML = '<h1>Hello World!!<\h1>' // innerHTML permite digitar html no item selecionado

const button = document.querySelector('.btn');

button.style.background = "red"; // pode alterar o style do css (nesse caso o background-color)
button.style.color = "blue";
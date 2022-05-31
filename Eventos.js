const submitbutton = document.querySelector("#submit-button");
const myform = document.querySelector("#my-form")
const nameImput = document.querySelector("#name");
const emailImput = document.querySelector("#email");

const items = document.querySelector(".items");

submitbutton.addEventListener("click", function(event){ //cria um evento para a parte selecionada
    event.preventDefault(); //tira a função do evento colocado na função 
    console.log(event);
    
    const nameValue = nameImput.value;
    const emailValue = emailImput.value;

    if(nameValue === "" || emailValue === ""){
        return alert("Por favor complete todos os campos!!"); //o return faz com que o codigo pare se for executado 
    }
        console.log(nameValue);
        console.log(emailValue);


    submitbutton.style.background = "purple";
    items.style.color = "red"

    items.firstElementChild.textContent = nameValue; //só serão executados quando passar pela verificalção do if
    items.children[1].textContent = emailValue;
    items.lastElementChild.textContent = "Tudo Certo!!";
});



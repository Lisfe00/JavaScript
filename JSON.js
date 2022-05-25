//JSON

const todo = [
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

const todosJSON = JSON.stringify(todo); //transforma em uma string em formato JSON (nesse caso converte a lsita em string)
const todoslist = JSON.parse(todosJSON); //desfaz a alteração do comentario anterior

console.log(todosJSON);
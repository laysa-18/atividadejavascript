let mostrar = document.getElementById("mostrar")
//let car = "fiat"
let car = 
{
    nome: "fiat",
    cor: "vermelho",
    modelo: "uno",
}

const aluno = 
{
    Primeironome: "Johan",
    Segundonome: "Carlos",
    idade: "18",
    nacionalidade: "Bolivia",
}

mostrar.innerHTML = aluno.Primeironome

const pessoa = 
{
    Primeironome:"Brunão",
    Segundonome:"Ruiz",
    id: 335214,
    fullnome: function()
    {
        return this.Primeironome + " " + this.Segundonome

    }
}

//vetor
let cor = ["Azul","Vermelho"]

const tarefas = 
[
    {
        id:1,
        texto: 'Levar o lixo para fora',
        completado: true,

    },
    {
        id:2,
        texto:'Encontar com o chefe',
        completado: true,
    },
    {
        id:3,
        texto:'Consulta no dentista',
        completado:false, 
    }
]

tarefas.forEach(teste)

function teste(tarefas)
{
    console.log(tarefas.texto)
}
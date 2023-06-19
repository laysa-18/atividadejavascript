let vidaheroi;
let ataquedoheroi;
let XPheroi;
let nivelheroi;
let classeesdosherois = ["Mago","Nnja","viking"];
let nomedoheroi;
let mensagemdonome;

nomedoheroi = document.getElementById
("Nomedopersonagem")
mensagemdonome = document.getElementById("Mensagem")

function enviar()
{
    if(nomedoheroi.value!= ""){
    mensagemdonome.innerHTML = "Olá, " + nomedoheroi.value + ". Seja bem vindo ao jogo!"
}
else{
    mensagemdonome.innerHTML =   "Digite o seu nome para iniciar o jogo!" 
}
}
let numero = document.getElementById ("numero1")
let sinal = document.getElementById ("sinal")
let numero2 = document.getElementById ("numero2")
let resultado = document.getElementById ("resultado")

function Aperte()
{
    switch(sinal.value)
    {
        case "+":
        resultado.innerHTML = parseInt(numero.value) + parseInt(numero2.value)
        break;

        case "-":
        resultado.innerHTML = parseInt(numero.value) - parseInt(numero2.value)
        break;

        case "*":
        resultado.innerHTML = parseInt(numero.value) * parseInt(numero2.value)
        break;

        case "/":
        resultado.innerHTML = multiplicacao = parseInt(numero.value) / parseInt(numero2.value)
        break;

        default:
        resultado.innerHTML = ""
        break;
    }

}
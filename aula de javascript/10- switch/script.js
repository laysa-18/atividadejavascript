let numero = document.getElementById ("numero")
let resposta = document.getElementById("resposta")
let dia = document.getElementById ("dia")

function aperte(){
    switch(numero.value)
    {
        case "1": 
        resposta.innerHTML = ("Voce escolheu domingo")
        dia.innerHTML = ("Final de semana")
        break;

        case "2":
        resposta.innerHTML = ("Voce escolheu segunda")
        dia.innerHTML = ("dia util")
        break;

        case "3":
            resposta.innerHTML = ("Voce escolheu terça")
            dia.innerHTML = ("dia util")
            break;

            case "4":
                resposta.innerHTML = ("Voce escolheu quarta")
                dia.innerHTML = ("dia util")
                break;

            case "5":
                resposta.innerHTML = ("Voce escolheu quinta")
                dia.innerHTML = ("dia util")
                break;
                    
            case "6":
                resposta.innerHTML = ("Voce escolheu sexta")
                dia.innerHTML = ("dia util")
                break;
                        
            case "7":
                resposta.innerHTML = ("Voce escolheu sabado")
                dia.innerHTML = ("final de semana")
                break;
                  default :
                  resposta.innerHTML = ("valor invalido")    
                  dia.innerHTML  = ("")     
    }
}
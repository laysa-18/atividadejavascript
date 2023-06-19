//crie uma função para identificar se o número é par ou impar

//par ou impar(5)
//par ou impar(4)

let recebervalor =document.getElementById ("recebevalor");
let resultado = document.getElementById ("parouimpar")

function PAR(){
    if(recebervalor.value % 2 == 0){
        resultado.innerHTML ="Par"
    }else{
        resultado.innerHTML = "Impar"
    }
    
    }

    // outra forma

    function parouimpar(acões)
    {
        if(a % 2 == 0){
            return console.log("par")
        }
        else{
            return console.log("impar")
        }
    }

    //arrow
    let impar = (b) =>
    {
        if(b % 2 == 0){
            return console.log("par")
        }
        else{
            return console.log("impar")
        }   
    }
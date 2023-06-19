let recebervalor =document.getElementById ("recebevalor");
let resultado = document.getElementById ("parouimpar")

function PAR(){
    if(recebervalor.value % 2 == 0){
        resultado.innerHTML ="Par"
    }else{
        resultado.innerHTML = "Impar"
    }
    
    }

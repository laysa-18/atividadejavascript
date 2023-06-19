let resultadosoma = document.getElementById ("soma")
let resultadosub  = document.getElementById ("subtracao")
let resultadomulti = document.getElementById ("multiplicacao")
let resultadodiv = document.getElementById ("div")
let resultadopotenciação = document.getElementById ("potenciação")
let resultadomodulo = document.getElementById ("resto")

let x;
let y;
let z;

x = 5
y = 2
z = x + y;

resultadosoma.innerHTML = z

let a = 5
let b = 2 
let c = a - b;

resultadosub.innerHTML = c

let d = 5
let e = 2
let f = d * e;

resultadomulti.innerHTML = f

let g = 5
let h = 2
let i = 5 / 2;

resultadodiv.innerHTML = i

let j = 5
let k = 2
let l = 5 ** 2;

resultadopotenciação.innerHTML = l

let m = 13 
let n = 3 
let o = m % n;

resultadomodulo.innerHTML = o 

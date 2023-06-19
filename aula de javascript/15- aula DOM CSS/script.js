//document.guetElementById(id).style.property = new style
let titulo = document.getElementById("titulo")
titulo.style.backgroundColor = '#ccc'
titulo.style.textAlign = 'center'
titulo.style.borderBottom = 'solid 3px #000'
titulo.style.margin = '20px'

let itens = document.getElementsByClassName('item')
console.log(itens)
itens[0].innerHTML = 'Hello'
itens[0].style.fontweigth = 'bold'
itens[0].style.backgroundColor = 'yellow'

// Aula de tipos de Declaração
// Interpretador do JS vai carregar primeiro as funções...
console.log(soma(3, 4))
// function express não é carregada de inicio
console.log(sub(3, 4))
// function declaration 
function soma (x, y){
    return x+y
}

//function express
const sub = function (x, y){
    return x-y
}

//Named function expression
const mult = function mult(x, y){
    return x * y
}// Forma pouco usada


// high order 

function composition (fn1, fn2, fn3) {
    return function(valor) {
       return fn3(fn2(fn1(valor)))
    }
    
}

function gritar(text) {
    return text.toUpperCase()
}

function enfatizar(text) {
    return `${text}!!`
}

function  tornarLento(text) {
    return text.split('').join(' ')
}

const exagerado = composition(
  gritar,
  enfatizar,
  tornarLento
)

console.log(exagerado("cuidado com o buraco"));
console.log(exagerado("para!"))
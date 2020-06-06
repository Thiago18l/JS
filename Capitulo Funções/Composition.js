// high order 

function composition (...fns) {
    return function(valor) {
       return fns.reduce((acumulador, fn) => {
            return fn(acumulador)
       }, valor)
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
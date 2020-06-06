// high order 

function composition (fn1, fn2, fn3, valor) {
    return fn3(fn2(fn1(valor)))
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

const result = composition(gritar, enfatizar, tornarLento, 'cuidado com o buraco')

console.log(result);
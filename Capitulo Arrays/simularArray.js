// Gerando arrays a partir de Objetos

const quaseArray = { 0: 'Rafael', 1: 'João', 2: 'Thiago'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])
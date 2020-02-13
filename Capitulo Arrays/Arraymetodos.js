const pilotos = ['Schumacher', 'Alonso', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array

console.log(pilotos)

pilotos.push('Thiago')

console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//metodo splice

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1) // remove o elemento do índice 3
console.log(pilotos)

//slice
// slice cria um nome array a partir de um pedaço do array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1, 3)
console.log(algunsPilotos1)
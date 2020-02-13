// Aula de funções Object...

const pessoa = {
    nome: 'Matheus',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// Usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false, // Pode ser sobreescrito? True = sim, false = não
    value: '01/02/2019'
})
pessoa.dataNascimento = '02/02/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(pessoa)

// ES2015 Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest)
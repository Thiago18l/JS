// let e const

{
    var a = 2 // consegue ser acessada fora do bloco.
    let b = 3 // só consegue ser acessada dentro do bloco
}

console.log(a) // vai printar 2 
// console.log(b) // vai dizer que b is not defined


// Template String

const produto = 'Celular'
console.log(`${produto} é caro!`)

// Operador Destructuring 
const [l, e, ...tras] = 'Thiago' // l vai receber a Letra T, 'e' vai receber a letra h e a variavel 'tras' vai receber o restante

console.log(l,e,tras) // T h ['i', 'a', 'g', 'o']

const [x, y] = [18 , 12]
console.log(x , y)

// Objetos
const { idade, nome } = { nome:'Thiago', idade: 22 }
console.log(`Seu nome é ${nome} e você tem ${idade} anos`)

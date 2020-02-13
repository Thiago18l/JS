

const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Thiago'

console.log(pessoa)

const a = 1
const b = 2
const c = 3

const obj = {a, b, c}
console.log(obj)

const nomeatt = 'Nota'
const valoratt = 7.7

const obj2 = {}
obj2[nomeatt] = valoratt
console.log(obj2)

const obj3 = {[nomeatt]: valoratt}
console.log(obj3)

const obj4 = {
    funcao1: function(){
        //todo...
    },
    funcao2() {
        //todo...
    }
}
console.log(obj4)
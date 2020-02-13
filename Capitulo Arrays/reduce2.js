
Array.prototype.reduce2 = function(callback, valorInicial){
    const IndiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = IndiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total+valor
const nums = [1,2,3,4,5,6,7]

console.log(nums.reduce2(soma))

const alunos = [
    {nome: 'Thiago', nota: 7.70, bolsista: true},
    {nome: 'João', nota: 8.10, bolsista: false},
    {nome: 'Joaquina', nota: 5.7, bolsista: false},
    {nome: 'Maria', nota: 7.10, bolsista: true}
]
// Challenge: Todos os alunos são bolsistas?
const bolsistasAll = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(bolsistasAll))

// Challenge: Algum aluno é bolsista?
const someBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(someBolsista))
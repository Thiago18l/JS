// Imperativo vs Declarativo

const alunos = [
    { nome: 'Maria', nota: 7.7},
    { nome: 'João', nota: 5.0}
]
//Imperativo
let total = 0
for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//Declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


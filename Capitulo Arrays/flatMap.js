const escola = [{
    nome: 'Turma 0',
    alunos: [{
        nome: 'Gustavo',
        nota: 7.3
    }, {
        nome: 'Ana',
        nota: 5.9
    }]
},{
    nome: 'Turma 1',    
    alunos: [{
        nome: 'Rebeca',
        nota: 8.0
    }, {
        nome: 'Roberto',
        nota: 7.0
    }]
}
]

const getNota = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)
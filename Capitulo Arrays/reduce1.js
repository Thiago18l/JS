//Aula sobre o metodo reduce

const alunos = [
    {nome: 'Thiago', nota: 7.70, bolsista: true},
    {nome: 'João', nota: 8.10, bolsista: false},
    {nome: 'Joaquina', nota: 5.7, bolsista: false},
    {nome: 'Maria', nota: 7.10, bolsista: true}
]

const result = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // onde tem o 0, podemos alterar o acumulador e introduzir tipos diferentes, como por exemplo arrays

console.log(result)
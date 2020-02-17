// sem promise...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url , response => {
        let resultado = '';
        response.on('data', dados => {
            resultado += dados
        })
        response.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    // turma B
    getTurma('B', alunos =>{
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
    })
    //turma C
    getTurma('C', alunos =>{
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })

})
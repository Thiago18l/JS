const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses =  f => f.pais === 'China'

const womans = f => f.genero === 'F'

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // menor salario || maior salario

    const func = funcionarios
        .filter(chineses)
        .filter(womans)
        .reduce(menorSalario)

    console.log(func)
})

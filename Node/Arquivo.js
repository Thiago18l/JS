const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const acharPais = pais => pais.pais === 'China'

const acharSalario = (func, funcAtual) => { 
    return func.salario < funcAtual.salario ? func : funcAtual 
}

const acharWoman = woman => woman.genero === 'F'

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(acharPais).filter(acharWoman).reduce(acharSalario))

})

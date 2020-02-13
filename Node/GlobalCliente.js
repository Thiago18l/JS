require('./Global')

console.log(meuApp.ola())

meuApp.nome = 'Eita' // Não vai mudar a informação do objeto pois esta congelado.
console.log(meuApp.nome)
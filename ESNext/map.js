const tecnologias = new Map()

tecnologias.set('React', {framework: true})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react) // vai retornar undefined
// forma correta de acessar 
console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework) // output === true

const chavesVariadas = new Map([
    [function() {}, 'Função'], // chave & valor
    [{}, 'Objeto'],
    [123, 'Numeros']
])

chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // se um elemento está contido ou não dentro do Map, return true
chavesVariadas.delete(123) // excluir elementos dentro do Map usando delete
console.log(chavesVariadas.has(123)) // return === false
console.log(chavesVariadas.size) // retorna a quantidade de elementos do Map

// em Map não pode haver chaves duplicadas
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas) // o valor B substitui o valor A


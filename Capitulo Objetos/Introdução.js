// Objeto é uma coleção dinamica de chave e valor 


const produto = new Object
produto.nome = 'Cadeira'
console.log(produto)

produto ['marca do produto'] = 'Generica'

produto.preco = 200
console.log(produto)

delete produto.preco
console.log(produto)

const carro  = {
    modelo: 'A4',
    valor:  899000,
    proprietario: {
        nome: 'Thiago',
        idade: 18,
        endereco: {
            logradouro: 'RUA X',
            numero: 03
        },
        condutores: [{
            nome: 'Junior',
            idade: 19
        }, {
            nome: 'Ana',
            idade:23
        }]
    }
}
console.log(carro)
carro.proprietario.endereco.numero = 1000
console.log(carro)
console.log(carro.proprietario.condutores.length)

// implementação do map
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho =  [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de lapis", "preco":4.75}',
    '{"nome": "Caneta", "preco": 1.00}'
]

const Objeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco
 
const result = carrinho.map2(Objeto).map2(apenasPreco)

console.log(result)
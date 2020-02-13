

const carrinho =  [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de lapis", "preco":4.75}',
    '{"nome": "Caneta", "preco": 1.00}'
]

const Objeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco
 
const result = carrinho.map(Objeto).map(apenasPreco)

console.log(result)
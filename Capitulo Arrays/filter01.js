

const produtos = [
    {nome: 'Notebook', preco: 2400, fragil: true},
    {nome: 'Ipad', preco: 1190, fragil: true},
    {nome: 'Copo de vidro', preco: 50, fragil: true},
    {nome: 'Copo de plástico', preco: 10, fragil: false}

]

console.log(produtos.filter(function(e){
    if (e.preco >= 500 && e.fragil === true){
     return e
    }
}))

// Outros meios

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

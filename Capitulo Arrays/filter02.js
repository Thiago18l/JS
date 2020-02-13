// Implementando filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }        
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2400, fragil: true},
    {nome: 'Ipad', preco: 1190, fragil: true},
    {nome: 'Copo de vidro', preco: 50, fragil: true},
    {nome: 'Copo de plástico', preco: 10, fragil: false}

]

console.log(produtos.filter2(function(e){
    if (e.preco >= 500 && e.fragil === true){
     return e
    }
}))

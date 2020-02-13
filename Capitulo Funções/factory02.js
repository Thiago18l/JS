// Aula de Factory [ Aula 02]

function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Leite', 4.00));


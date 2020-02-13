// Aula de Função Factory [ Aula 01]
// exemplo
// Factory simples

function criarPessoa(){
    return {
        nome: 'Thiago',
        sobrenome: 'Lopes'
    }
}

console.log(criarPessoa())
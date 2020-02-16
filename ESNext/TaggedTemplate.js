// Tagged Template  === processa o template dentro de funções

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)

    return 'outra String' 
}

const aluno = 'Thiago'
const situacao = 'Aprovado'

console.log( `${aluno} está ${situacao}`)
console.log(tag `${aluno} está ${situacao}`)

// Exemplo 

function real(partes,...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)




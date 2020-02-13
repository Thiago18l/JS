const aprovados = ['João', 'Luana', 'Maria', 'Thiago']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(`${indice+1}: ${aprovado}`)
aprovados.forEach(exibirAprovados)
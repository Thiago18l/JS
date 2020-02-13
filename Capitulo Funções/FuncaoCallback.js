// Aula de Função callback [Aula 01] >

const fabricantes = ['mercedes', 'BMW', 'Audi']

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(fabricantes)
})
fabricantes.forEach(fabricantes => console.log(fabricantes))
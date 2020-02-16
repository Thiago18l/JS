
for (let letra of "Thiago"){
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise'];
for(let i in assuntoEcma){ // for in percorre em cima de indices
    console.log(i)
}

//
for(let assunto of assuntoEcma){ // for of percorre em cima dos valores
    console.log(assunto)
}

const assunstosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for(let assunto of assunstosMap){
    console.log(assunto) // vai imprimir os arrays com chave e valor
}
for(let chave of assunstosMap.keys()){
    console.log(chave) // output apenas as chaves
}
for (let valores of assunstosMap.values()){
    console.log(valores)// apenas os valores
}
for(let [chave, valor] of assunstosMap.entries()){
    console.log(chave, valor) // output chave e valor
}
// usando set

const letras = new Set(['a', 'b', 'c'])
for (let letra of letras){
    console.log(letra) // output a, b, c
}
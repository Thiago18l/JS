// Implementação

const aprovados = ['Thiago', 'João', 'Maria']
/*
for (let i = 0; i < aprovados.length; i++){
    console.log(`${[i+1]} : ${aprovados[i]}`)
}
*/

Array.prototype.forEach2 = function(callback) {
    for (let j = 0; j < this.length; j++){
        callback(this[j], j, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}:${nome}`)
})

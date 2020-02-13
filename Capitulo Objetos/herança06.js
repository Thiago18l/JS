function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até breve', 456)
console.log(aula1,aula2)

function novo (f, ...param){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, param)
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
const aula4 = novo(aula, 'Até breve', 456)
console.log(aula3, aula4)
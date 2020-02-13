// Aula de classes, comparando com factory
// Utilizando classe com construtor 
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar (){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Thiago')
p1.falar()


// Tem um escopo mais abrangente 
const pessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()
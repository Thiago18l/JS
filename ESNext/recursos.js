// ES8: Object.values / Object.entries

const obj = { a: 1, b: 2, c:3 }

console.log('1 -',Object.keys(obj)) // apenas chaves
console.log('2 -', Object.values(obj)) // Apenas valores
console.log('3 -',Object.entries(obj)) // chave valor 

// Melhorias na notação literal 

const nome = 'Carla'
const pessoa = {
    nome,
    ola (){
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Classes

class Animal {

}
class Dog extends Animal { // Herança
    falar(){
        return 'Auau'
    }
}

console.log(new Dog().falar())
// Aula sobre herança em JS [Aula-1]

const ferrari = {
    modelo: 'f40',
    velMax: 324
}


const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function meuObj() {}

console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)
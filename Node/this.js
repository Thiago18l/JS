console.log(this === global) // false porque ele aponta para module.exports
console.log(this === module)

console.log(this === module.exports) // true
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === global) // true, porque o this dentro de uma função aponta para o Objeto Global
}

logThis() // dentro de uma função o this não aponta para exports

